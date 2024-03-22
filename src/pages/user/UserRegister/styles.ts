import styled from 'styled-components';

import pageBackground from '@/public/register-background.jpg';

export const BackGroundDiv = styled.div`
    background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.8) 40%, rgba(26, 30, 95, 0.8)), url(${pageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 95%;
    height: 95%;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    z-index: 1;
    border-radius: 2rem;
`;

export const FormDiv = styled.div`
    padding: 30px 0px;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
