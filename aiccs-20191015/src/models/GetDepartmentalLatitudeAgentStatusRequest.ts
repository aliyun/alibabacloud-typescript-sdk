// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDepartmentalLatitudeAgentStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of department IDs.
   */
  depIds?: number[];
  /**
   * @remarks
   * The end timestamp. Unit: milliseconds.
   * 
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * Specifies whether to query by department group. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the ID in the **Instances** section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
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
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start timestamp. Unit: milliseconds.
   * 
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
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

