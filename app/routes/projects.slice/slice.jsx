
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import certificate1 from '~/assets/certificate1.jpg';
import certificate2 from '~/assets/certificate2.jpg';
import certificate3 from '~/assets/certificate3.jpg';
import certificate4 from '~/assets/certificate4.jpg';
import certificate5 from '~/assets/certificate5.jpg';
import certificate6 from '~/assets/certificate6.jpg';
import certificate7 from '~/assets/certificate7.jpg';
import certificate8 from '~/assets/certificate8.jpg';
import certificate9 from '~/assets/certificate9.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Achievements';
const description =
  'Proof I Have a Life Beyond Netflix!';
const roles = [];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Profile' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
            </ProjectTextRow>
            <Image
              src={certificate1}
              width={940}
              height={500}
            />
            <Image
              src={certificate2}
              width={940}
              height={500}
            />
            <Image
              src={certificate3}
              width={940}
              height={500}
            />
            <Image
              src={certificate4}
              width={940}
              height={500}
            />
            <Image
              src={certificate5}
              width={940}
              height={500}
            />
            <Image
              src={certificate6}
              width={940}
              height={500}
            />
            <Image
              src={certificate7}
              width={940}
              height={500}
            />
            <Image
              src={certificate8}
              width={940}
              height={500}
            />
            <Image
              src={certificate9}
              width={940}
              height={500}
            />
            
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
