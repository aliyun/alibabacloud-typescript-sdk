// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDBInstancePlanRequest extends $dara.Model {
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
   * The execution information of the plan. Specify the parameter in the JSON format. The parameter value varies based on the values of **PlanType** and **PlanScheduleType**. The following section describes the PlanConfig parameter.
   * 
   * @example
   * {"pause":{"executeTime":"2022-08-30T16:00:00Z"}}
   */
  planConfig?: string;
  /**
   * @remarks
   * The description of the plan.
   * 
   * @example
   * this is a test plan
   */
  planDesc?: string;
  /**
   * @remarks
   * The end time of the plan. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * > 
   * 
   * *   This parameter must be specified only for **periodically executed** plans.
   * 
   * *   If you do not specify this parameter, the plan stops until the plan is deleted.
   * 
   * @example
   * 2023-04-17T23:00Z
   */
  planEndDate?: string;
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
   * The name of the plan.
   * 
   * @example
   * test-plan
   */
  planName?: string;
  /**
   * @remarks
   * The start time of the plan. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > 
   * 
   * *   This parameter must be specified only for **periodically executed** plans.
   * 
   * *   If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 2022-04-17T23:00Z
   */
  planStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planConfig: 'PlanConfig',
      planDesc: 'PlanDesc',
      planEndDate: 'PlanEndDate',
      planId: 'PlanId',
      planName: 'PlanName',
      planStartDate: 'PlanStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planConfig: 'string',
      planDesc: 'string',
      planEndDate: 'string',
      planId: 'string',
      planName: 'string',
      planStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

