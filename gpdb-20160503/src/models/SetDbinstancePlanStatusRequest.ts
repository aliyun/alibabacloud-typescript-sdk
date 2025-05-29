// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDBInstancePlanStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the plan.
   * 
   * >  You can call the [DescribeDBInstancePlans](https://help.aliyun.com/document_detail/449398.html) operation to query the details of plans, including plan IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  planId?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the plan. Valid values:
   * 
   * *   **disable**: disables the plan.
   * *   **enable**: enables the plan.
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  planStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planId: 'PlanId',
      planStatus: 'PlanStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planId: 'string',
      planStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

