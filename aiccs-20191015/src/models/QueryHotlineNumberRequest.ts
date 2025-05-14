// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2256****
   */
  departmentId?: number;
  groupIds?: number[];
  /**
   * @example
   * 0571****2211
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      groupIds: 'GroupIds',
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      hotlineNumber: 'string',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

