// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 2256****
   */
  departmentId?: number;
  /**
   * @remarks
   * The list of skill groups.
   */
  groupIds?: number[];
  /**
   * @remarks
   * The hotline number. Fuzzy query is supported.
   * 
   * @example
   * 0571****2211
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID.
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
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

