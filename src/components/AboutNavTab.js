import { Tab } from "@headlessui/react";
import "./AboutNavTab.css";
import React from "react";

function AboutNavTab() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab
          className={({ selected }) => `${selected ? "action" : "inaction"}`}
        >
          Personal Info
        </Tab>

        <Tab
          className={({ selected }) => `${selected ? "action" : "inaction"}`}
        >
          Education
        </Tab>
        <Tab
          className={({ selected }) => `${selected ? "action" : "inaction"}`}
        >
          Enthusiasms
        </Tab>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel className="gallery">
          <div className="personal_info">
            <ul>
              <li>
                Emmanuel Kafeero is a 29year old Electrical Engineer with a
                diverse professional background in engineering, technology, and
                business.
              </li>
              <li>
                I'm a results-driven and committed professional, eager to
                acquire new knowledge and skills.
              </li>
              <li>
                Emmanuel possesses experience in software development, having
                worked as a Software Developer at Buri Africa Limited, where i
                developed software systems, websites, and mobile applications.
              </li>
              <li>
                I currently work at Reading Association of Uganda as an
                Information Technology Specialist, overseeing their backend
                using WordPress and promoting literacy through an online
                platform called Literacy Cloud.
              </li>
            </ul>
          </div>
        </Tab.Panel>
        <Tab.Panel className="gallery">
          <div className="personal_info">
            <ul>
              <li>
                HSK 3 Chinese language at the University of Science and
                Technology Beijing
              </li>
              <li>
                Master's in Control Science and Electronics Engineering at the
                University of Science and Technology Beijing(Ongoing).
              </li>
              <li>
                Bachelor's degree in Electrical Engineering at Makerere
                University
              </li>
              <li>High school Education at King's College Budo</li>
            </ul>
          </div>
        </Tab.Panel>
        <Tab.Panel className="gallery">
          <div className="personal_info">
            <ul>
              <li>
                I have always had a curious mind so learning new skills or any
                kind of technology is of keen interest to me.
              </li>
              <li>
                I enjoy watching movies, series documentairies, every once in a
                while
              </li>
              <li>Sleeping</li>
            </ul>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default AboutNavTab;
