// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstancePlanRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances within a region.
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
   * The end time of the plan. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * > 
   * 
   * *   This parameter must be specified only when **PlanScheduleType** is set to **Regular**.
   * 
   * *   If you do not specify this parameter, the plan stops until the plan is deleted.
   * 
   * @example
   * 2023-04-17T23:00Z
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
   * *   **Postpone**: The plan is executed later.
   * *   **Regular**: The plan is executed periodically.
   * 
   * This parameter is required.
   * 
   * @example
   * Regular
   */
  planScheduleType?: string;
  /**
   * @remarks
   * The start time of the plan. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > 
   * 
   * *   This parameter must be specified only when **PlanScheduleType** is set to **Regular**.
   * 
   * *   If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 2022-04-17T23:00Z
   */
  planStartDate?: string;
  /**
   * @remarks
   * The type of the plan. Valid values:
   * 
   * *   **PauseResume**: pauses and resumes an instance.
   * *   **Resize**: changes the number of compute nodes.
   * *   **ModifySpec**: changes compute node specifications.
   * 
   * > - You can specify the value to ModifySpec only for instances in elastic storage mode.
   * >- You can specify the value to ModifySpec only for instances in elastic storage mode.
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

