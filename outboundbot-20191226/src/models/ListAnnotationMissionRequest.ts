// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionRequest extends $dara.Model {
  /**
   * @remarks
   * Annotation mission ID
   * 
   * @example
   * 0943abcb-bd7d-4ace-8cf7-97d39d4dd0b9
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * Annotation mission name
   * 
   * @example
   * 全景服务场景-标注任务-20230316-103253
   */
  annotationMissionName?: string;
  /**
   * @remarks
   * Annotation status filter. Deprecated.
   */
  annotationStatusListFilter?: number[];
  /**
   * @remarks
   * Annotation status filter
   * 
   * > Format: [1]. You can specify multiple values. Valid values:
   * 
   * - 1: In progress
   * 
   * - 2: Completed
   * 
   * - 3: Closed
   * 
   * @example
   * [1]
   */
  annotationStatusListStringFilter?: string;
  /**
   * @remarks
   * End time of the annotation mission creation filter
   * 
   * @example
   * 1673280000000
   */
  createTimeEndFilter?: number;
  /**
   * @remarks
   * Start time of the annotation mission creation filter
   * 
   * @example
   * 1661961600000
   */
  createTimeStartFilter?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 191ef468-75a2-4004-9441-a5c31bf5cd9d
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of entries per page
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

