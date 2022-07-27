import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsArrowRightCircle, BsFillCaretLeftFill } from 'react-icons/bs';
import doctors from './doctorsInfo';
import Sidebar from './Sidebar';
import styles from '../../css/docPage.module.css';

const Doctor = () => {
  const { id } = useParams();
  const doctor = doctors.find((item) => parseInt(item.id, 10) === parseInt(id, 10));

  return (
    <>
      <Sidebar />
      <div className={styles.detailContainer}>
        <div className={styles.container}>
          <img
            src={doctor.image}
            alt={doctor.name}
            className={styles.docImage}
          />
          <div className={styles.doctorInfoDiv}>
            <div className={`text-end ${styles.doctorInfo}`}>
              <h1 className="fw-bolder fs-4">{doctor.name}</h1>
              <p className={styles.desc}>{doctor.desc}</p>
            </div>
            <table className="table table-striped mt-5">
              <tbody>
                <tr>
                  <td>City</td>
                  <td>{doctor.city}</td>
                </tr>
                <tr>
                  <td>Specialization</td>
                  <td>{doctor.speciality}</td>
                </tr>
                <tr>
                  <td>Charges</td>
                  <td>{doctor.charges}</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <div className={`${styles.reserve} ${styles.reserveDiv} p-2 d-flex`}>
                <Link
                  to="/reserve"
                  state={doctor}
                  className={`btn btn-light ${styles.reserveBtn}`}
                >
                  Reserve
                </Link>
                <BsArrowRightCircle className="mx-2" size={40} color="white" />
              </div>
            </div>
          </div>
        </div>
        <Link to="/doctors">
          <div className={`${styles.backNav} d-flex justify-content-center align-items-center`}>
            <BsFillCaretLeftFill />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Doctor;
