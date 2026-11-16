// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductLogsRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accessed accounts. If this parameter is left empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The ID of the enterprise entity.
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
   * The ID of the instance for which the billing is deducted.
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
   * The end time of the billing cycle. The time is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1679068799999
   */
  billingEndTime?: number;
  /**
   * @remarks
   * The start time of the billing cycle. The time is a UNIX timestamp in milliseconds.
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
   * The list of enterprises and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIds?: DescribeDeductLogsRequestEcIdAccountIds[];
  /**
   * @remarks
   * The resource dimension to query.
   * 
   * @example
   * oss_rc
   */
  group?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * OSSBAG-cn******
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the level-1 marketplace. If this parameter is left empty, the ID of the marketplace to which the current user belongs is used by default.
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

