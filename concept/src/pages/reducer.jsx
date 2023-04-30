import Layout from "../layouts/Layout";
import { useReducer } from "react";

// Initial Form State
const initialFormState = [
  {
    id: 1,
    address1: "",
    address2: "",
    address3: "",
  },
];

// Address Form Reducer
function formReducer(state, action) {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [
        ...state,
        {
          id: state.length + 1,
          address1: "",
          address2: "",
          address3: "",
        },
      ];
    case "REMOVE_ADDRESS":
      return state.slice(0, -1);
    case "UPDATE_ADDRESS_FIELD":
      return state.map((address) => {
        if (address.id === action.payload.addressId) {
          return {
            ...address,
            [action.payload.fieldName]: action.payload.fieldValue,
          };
        }
        return address;
      });
    default:
      return state;
  }
}

// Export
export default function Reducer() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  function handleAddAddress(e) {
    e.preventDefault();
    dispatch({ type: "ADD_ADDRESS" });
  }

  function handleRemoveAddress(e) {
    e.preventDefault();
    dispatch({ type: "REMOVE_ADDRESS" });
  }

  function handleAddressFieldChange(e) {
    const { name, value } = e.target;
    const [fieldName, addressId] = name.split("-");
    dispatch({
      type: "UPDATE_ADDRESS_FIELD",
      payload: {
        addressId: Number(addressId),
        fieldName,
        fieldValue: value,
      },
    });
  }

  return (
    <>
      <Layout>
        <div className="container pt-4">
          <div>
            <h3>Reducer</h3>
          </div>

          {/* Address Form */}
          <div>
            <form>
              {formState.map((address) => (
                <div key={address.id}>
                  <label className="form-label">Address {address.id}</label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name={`address1-${address.id}`}
                      placeholder="Address 1"
                      value={address.address1}
                      onChange={handleAddressFieldChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name={`address2-${address.id}`}
                      placeholder="Address 2"
                      value={address.address2}
                      onChange={handleAddressFieldChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name={`address3-${address.id}`}
                      placeholder="Address 3"
                      value={address.address3}
                      onChange={handleAddressFieldChange}
                    />
                  </div>
                </div>
              ))}
              <button
                className={`btn btn-primary mx-2 ${
                  formState.length < 3 ? "" : "visually-hidden"
                }`}
                onClick={handleAddAddress}
              >
                Add
              </button>
              <button
                className={`btn btn-danger mx-2 ${
                  formState.length > 1 ? "" : "visually-hidden"
                }`}
                onClick={handleRemoveAddress}
              >
                Remove
              </button>
              <button className="btn btn-success mx-2">Submit</button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
