import { createAction, props } from '@ngrx/store';
import { PublicCourse } from '../shared/models/course.model';

export namespace PublicCoursesActions {
  export const loadAllTypeCourses = createAction(
    'Load Courses',
    props<{
      courseType: boolean;
      amount: number;
    }>()
  );
  export const loadAllTypeCoursesSuccess = createAction(
    'Load Courses Success',
    props<{ courses: PublicCourse[] }>()
  );
  export const loadAllTypeCoursesError = createAction('Load Courses Error');

  export const loadCoursesBySphere = createAction(
    'Load Courses By Sphere',
    props<{
      sphereName: string;
      offset: number;
    }>()
  );
  export const loadCoursesBySphereSuccess = createAction(
    'Load Courses By Sphere Success',
    props<{
      courses: PublicCourse[];
      sphereName: string;
    }>()
  );

  export const filterCoursesBySpheres = createAction(
    'Filter Courses By Spheres',
    props<{
      spheres: string[];
    }>()
  );
}
export namespace PrivatePublicCoursesActions {}
