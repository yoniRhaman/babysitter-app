"use client";// app/page.js
import React, { useState } from'react';
import styled from 'styled-components';

// דף ראשי
export default function HomePage() {
  // נשתמש ב-state כדי לנהל את רשימת העבודות
  const [jobs, setJobs] = useState([
    { id: 1, name: "Alice", date: "2024-10-01", hours: 4, payment: 200 },
    { id: 2, name: "Bob", date: "2024-09-29", hours: 6, payment: 300 },
  ]);

  // פונקציה שתטפל בהוספת עבודה חדשה (כרגע רק שמה לוג)
  const handleAddJob = () => {
    console.log("New job will be added here");
    // כאן תוכל להוסיף לוגיקה להוספת עבודה חדשה
  };

  return (
    <Container>
      <Title>ניהול עבודות בייביסיטר</Title>
      
      {/* כפתור להוספת עבודה חדשה */}
      <Button onClick={handleAddJob}>הוספת עבודה חדשה</Button>

      {/* הצגת רשימת עבודות קודמות */}
      <JobList>
        {jobs.length === 0 ? (
          <NoJobs>אין עבודות קודמות להצגה</NoJobs>
        ) : (
          jobs.map((job) => (
            <JobItem key={job.id}>
              <JobDetails>
                <p>שם: {job.name}</p>
                <p>תאריך: {job.date}</p>
                <p>שעות: {job.hours}</p>
              </JobDetails>
              <Payment>תשלום: ₪{job.payment}</Payment>
            </JobItem>
          ))
        )}
      </JobList>
    </Container>
  );
}

// עיצוב עם Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #005bb5;
  }
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const JobItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Payment = styled.div`
  font-weight: bold;
  color: #0070f3;
`;

const NoJobs = styled.div`
  text-align: center;
  font-size: 18px;
  color: #666;
`;
