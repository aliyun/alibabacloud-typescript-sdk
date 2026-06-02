// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionRequest extends $dara.Model {
  /**
   * @example
   * 0943abcb-bd7d-4ace-8cf7-97d39d4dd0b9
   */
  annotationMissionId?: string;
  annotationMissionName?: string;
  annotationStatusListFilter?: number[];
  /**
   * @example
   * [1]
   */
  annotationStatusListStringFilter?: string;
  /**
   * @example
   * 1673280000000
   */
  createTimeEndFilter?: number;
  /**
   * @example
   * 1661961600000
   */
  createTimeStartFilter?: number;
  /**
   * @example
   * 191ef468-75a2-4004-9441-a5c31bf5cd9d
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
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

