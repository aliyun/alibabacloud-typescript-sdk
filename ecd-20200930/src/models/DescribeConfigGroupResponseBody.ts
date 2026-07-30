// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of resources bound to the configuration group.
   * 
   * @example
   * 4
   */
  bindCount?: number;
  /**
   * @remarks
   * The quantity information of resources bound to the configuration group.
   */
  bindCountMap?: { [key: string]: number };
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * Scheduled task information
   */
  description?: string;
  /**
   * @remarks
   * The configuration group ID.
   * 
   * @example
   * ccg-0cid8v30an12****
   */
  groupId?: string;
  /**
   * @remarks
   * Used for frontend display. The code for the system scheduled task description.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE_DESC
   */
  innerTimerDesc?: string;
  /**
   * @remarks
   * Used for frontend display. The mapping code for the system scheduled task name.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE
   */
  innerTimerName?: string;
  /**
   * @remarks
   * Used by system scheduled task check. The current scheduled task does not support unbinding or binding.
   */
  isBind?: boolean;
  /**
   * @remarks
   * Used by system scheduled task check. The current scheduled task does not support modification.
   */
  isUpdate?: boolean;
  /**
   * @remarks
   * The configuration group name.
   * 
   * @example
   * Scheduled task
   */
  name?: string;
  /**
   * @remarks
   * The product type used by the configuration group.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The configuration group status.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The configuration group type.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      bindCountMap: 'BindCountMap',
      description: 'Description',
      groupId: 'GroupId',
      innerTimerDesc: 'InnerTimerDesc',
      innerTimerName: 'InnerTimerName',
      isBind: 'IsBind',
      isUpdate: 'IsUpdate',
      name: 'Name',
      productType: 'ProductType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      bindCountMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      description: 'string',
      groupId: 'string',
      innerTimerDesc: 'string',
      innerTimerName: 'string',
      isBind: 'boolean',
      isUpdate: 'boolean',
      name: 'string',
      productType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.bindCountMap) {
      $dara.Model.validateMap(this.bindCountMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration group information.
   */
  data?: DescribeConfigGroupResponseBodyData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeConfigGroupResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

