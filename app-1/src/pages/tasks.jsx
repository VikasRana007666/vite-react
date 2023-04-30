import Layout from "../components/Layout";

export default function Tasks() {
  const tasks = [
    { id: 1, task: "Durward Reynolds", unavailable: false },
    { id: 2, task: "Kenton Towne", unavailable: false },
    { id: 3, task: "Therese Wunsch", unavailable: false },
    { id: 4, task: "Benedict Kessler", unavailable: true },
    { id: 5, task: "Katelyn Rohan", unavailable: false },
  ];

  return (
    <Layout>
      <div>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Tasks
            </h3>
            <button className="px-3  bg-slate-800 text-white rounded-full">
              Add
            </button>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {tasks.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt className="text-sm font-medium text-gray-500">
                    Task {item.id}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {item.task}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
