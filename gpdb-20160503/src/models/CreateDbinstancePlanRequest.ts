// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstancePlanRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a specific region.
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
   * The detailed information about the execution plan. The value must be in JSON format. The content must be adjusted based on the values of the **PlanType** and **PlanScheduleType** parameters. For more information, see the following supplementary instructions.
   * 
   * This parameter is required.
   * 
   * @example
   * {"pause":{"planCronTime":"0 0 12 1/1 * ? "},"resume":{"planCronTime":"0 0 0 1/1 * ? "}}
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
   * The end time of the plan. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * > - This parameter is required only when **PlanScheduleType** is set to **Regular**.
   * > - This parameter is optional. If you do not specify an end time, the plan stops when the cycle ends.
   * 
   * @example
   * 2023-04-17T23:00:00Z
   */
  planEndDate?: string;
  /**
   * @remarks
   * The name of the plan.
   * 
   * This parameter is required.
   * 
   * @example
   * test-plan
   */
  planName?: string;
  /**
   * @remarks
   * The execution mode of the plan. Valid values:
   * 
   * - **Postpone**: execute later.
   * - **Regular**: periodic execution.
   * 
   * This parameter is required.
   * 
   * @example
   * Regular
   */
  planScheduleType?: string;
  /**
   * @remarks
   * The start time of the plan. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * > - This parameter is required only when **PlanScheduleType** is set to **Regular**.
   * > - If you do not specify this parameter, the current time is used by default.
   * 
   * @example
   * 2022-04-17T23:00:00Z
   */
  planStartDate?: string;
  /**
   * @remarks
   * The type of the plan. Valid values:
   * 
   * - **PauseResume**: automatic start and stop.
   * - **Resize**: instance upgrade/downgrade, which increases or decreases the number of compute nodes.
   * - **ModifySpec**: specification change, which changes the node specifications.
   * - **InPlaceModifySpec**: in-place elastic scaling, which scales the compute resources on the local node without changing the base specifications.
   * 
   * > - Instance upgrade/downgrade is supported only for instances in Serverless mode.
   * > - Specification changes are supported only for instances in elastic storage mode.
   * > - In-place elastic scaling is supported only for high availability (HA) instances in elastic storage mode.
   * 
   * This parameter is required.
   * 
   * @example
   * PauseResume
   */
  planType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planConfig: 'PlanConfig',
      planDesc: 'PlanDesc',
      planEndDate: 'PlanEndDate',
      planName: 'PlanName',
      planScheduleType: 'PlanScheduleType',
      planStartDate: 'PlanStartDate',
      planType: 'PlanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planConfig: 'string',
      planDesc: 'string',
      planEndDate: 'string',
      planName: 'string',
      planScheduleType: 'string',
      planStartDate: 'string',
      planType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

