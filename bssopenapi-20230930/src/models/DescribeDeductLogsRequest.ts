// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductLogsRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If this parameter is empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1004064243473974
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID for billing deduction.
   * 
   * @example
   * ecs-******
   */
  billInstanceId?: string;
  /**
   * @remarks
   * The commodity code of the deducted item.
   * 
   * @example
   * snapshot
   */
  billingCommodityCode?: string;
  /**
   * @remarks
   * The billing end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1679068799999
   */
  billingEndTime?: number;
  /**
   * @remarks
   * The billing start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1647446400000
   */
  billingStartTime?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * ossbag
   */
  commodityCode?: string;
  /**
   * @remarks
   * The enterprise and account list. If this parameter is empty, the current account is queried.
   */
  ecIdAccountIds?: DescribeDeductLogsRequestEcIdAccountIds[];
  /**
   * @remarks
   * The resource dimension for the query.
   * 
   * @example
   * oss_rc
   */
  group?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * OSSBAG-cn******
   */
  instanceId?: string;
  /**
   * @remarks
   * The primary marketplace ID. If this parameter is empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
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
   * The list of deduction accounts.
   */
  relationAccountIds?: number[];
  static names(): { [key: string]: string } {
    return {
      billInstanceId: 'BillInstanceId',
      billingCommodityCode: 'BillingCommodityCode',
      billingEndTime: 'BillingEndTime',
      billingStartTime: 'BillingStartTime',
      commodityCode: 'CommodityCode',
      ecIdAccountIds: 'EcIdAccountIds',
      group: 'Group',
      instanceId: 'InstanceId',
      nbid: 'Nbid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      relationAccountIds: 'RelationAccountIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billInstanceId: 'string',
      billingCommodityCode: 'string',
      billingEndTime: 'number',
      billingStartTime: 'number',
      commodityCode: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeDeductLogsRequestEcIdAccountIds },
      group: 'string',
      instanceId: 'string',
      nbid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      relationAccountIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.relationAccountIds)) {
      $dara.Model.validateArray(this.relationAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

