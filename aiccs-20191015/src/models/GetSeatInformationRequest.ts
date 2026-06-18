// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSeatInformationRequest extends $dara.Model {
  /**
   * @remarks
   * AICCS instance ID.  
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
   * Current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of department IDs.
   */
  depIds?: number[];
  /**
   * @remarks
   * End UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * Specifies whether to query by department grouping. Default value: **false**. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * Page size. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      currentPage: 'currentPage',
      depIds: 'depIds',
      endDate: 'endDate',
      existDepartmentGrouping: 'existDepartmentGrouping',
      pageSize: 'pageSize',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

