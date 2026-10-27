// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the annotation task.
   * 
   * @example
   * 0943abcb-bd7d-4ace-8cf7-97d39d4dd0b9
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The name of the annotation task.
   * 
   * @example
   * Panorama service scenario - Annotation task - 20230316-103253
   */
  annotationMissionName?: string;
  /**
   * @remarks
   * The annotation status filter. This parameter is deprecated.
   */
  annotationStatusListFilter?: number[];
  /**
   * @remarks
   * The annotation status filter.
   * 
   * > The format is [1]. You can select multiple filter conditions. The valid values are as follows:
   * 
   * - 1: In progress.
   * - 2: Completed.
   * - 3: Closed.
   * 
   * @example
   * [1]
   */
  annotationStatusListStringFilter?: string;
  /**
   * @remarks
   * The end time for the annotation task creation filter.
   * 
   * @example
   * 1673280000000
   */
  createTimeEndFilter?: number;
  /**
   * @remarks
   * The start time for the annotation task creation filter.
   * 
   * @example
   * 1661961600000
   */
  createTimeStartFilter?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 191ef468-75a2-4004-9441-a5c31bf5cd9d
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionName: 'AnnotationMissionName',
      annotationStatusListFilter: 'AnnotationStatusListFilter',
      annotationStatusListStringFilter: 'AnnotationStatusListStringFilter',
      createTimeEndFilter: 'CreateTimeEndFilter',
      createTimeStartFilter: 'CreateTimeStartFilter',
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionId: 'string',
      annotationMissionName: 'string',
      annotationStatusListFilter: { 'type': 'array', 'itemType': 'number' },
      annotationStatusListStringFilter: 'string',
      createTimeEndFilter: 'number',
      createTimeStartFilter: 'number',
      instanceId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotationStatusListFilter)) {
      $dara.Model.validateArray(this.annotationStatusListFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

