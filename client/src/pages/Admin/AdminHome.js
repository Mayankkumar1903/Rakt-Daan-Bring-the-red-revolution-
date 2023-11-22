import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Blood bank systems are used to manage the collection, storage, and distribution of blood products. They can be used by hospitals, blood centers, and other organizations that need to track and manage blood inventory. Blood bank systems typically include features for managing blood donor data, blood product inventory, and blood transfusions. They can also be used to generate reports and track trends in blood usage.
Blood bank systems can help to improve the efficiency and accuracy of blood management. They can also help to reduce costs and improve patient safety. By automating many of the tasks involved in blood management, blood bank systems can free up staff to focus on other important tasks.
There are a number of different blood bank systems available on the market. When choosing a blood bank system, it is important to consider the specific needs of your organization. Some factors to consider include the size of your organization, the types of blood products you manage, and your budget.
If you are interested in learning more about blood bank systems, there are a number of resources available online. You can also contact a blood bank system vendor for more information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;