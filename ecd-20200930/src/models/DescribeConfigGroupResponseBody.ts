// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of resources that are bound to the configuration group.
   * 
   * @example
   * 4
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of bound cloud computers.
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
   * The ID of the configuration group.
   * 
   * @example
   * ccg-0cid8v30an12****
   */
  groupId?: string;
  /**
   * @remarks
   * Used for frontend display. The system scheduled task description uses a code.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE_DESC
   */
  innerTimerDesc?: string;
  /**
   * @remarks
   * Used for frontend display; maps the system scheduled task name to a code.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE
   */
  innerTimerName?: string;
  /**
   * @remarks
   * Used for system scheduled task checks. The current scheduled task does not support detach or attach operations.
   */
  isBind?: boolean;
  /**
   * @remarks
   * Used for system scheduled task checks. The current scheduled task does not support modification.
   */
  isUpdate?: boolean;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * Scheduled task
   */
  name?: string;
  /**
   * @remarks
   * The service type of the configuration group.
   * 
   * Valid values:
   * 
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The state of the configuration group.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The configuration group is available.
   * *   UNAVAILABLE: The configuration group is deleted.
   * *   DELETING: The configuration group is being deleted.
   * *   UPDATING: The configuration group is being modified.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The type of the configuration group.
   * 
   * Valid values:
   * 
   * *   Timer: the scheduled task type.
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
   * The configuration groups.
   */
  data?: DescribeConfigGroupResponseBodyData[];
  /**
   * @remarks
   * The page number.
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
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

