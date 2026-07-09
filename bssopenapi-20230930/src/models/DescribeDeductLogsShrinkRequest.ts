// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductLogsShrinkRequest extends $dara.Model {
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
  ecIdAccountIdsShrink?: string;
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
  relationAccountIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      billInstanceId: 'BillInstanceId',
      billingCommodityCode: 'BillingCommodityCode',
      billingEndTime: 'BillingEndTime',
      billingStartTime: 'BillingStartTime',
      commodityCode: 'CommodityCode',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      group: 'Group',
      instanceId: 'InstanceId',
      nbid: 'Nbid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      relationAccountIdsShrink: 'RelationAccountIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billInstanceId: 'string',
      billingCommodityCode: 'string',
      billingEndTime: 'number',
      billingStartTime: 'number',
      commodityCode: 'string',
      ecIdAccountIdsShrink: 'string',
      group: 'string',
      instanceId: 'string',
      nbid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      relationAccountIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

