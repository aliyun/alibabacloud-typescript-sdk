// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePlansRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
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
   * The time that is used to filter plans. If you specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format, the plans that are created before this time are returned. The time must be in UTC. If you do not specify this parameter, all plans are returned.
   * 
   * @example
   * 2022-04-17T23:00Z
   */
  planCreateDate?: string;
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
   * The plan ID.
   * 
   * > You can call the [DescribeDBInstancePlans](https://help.aliyun.com/document_detail/449398.html) operation to query the information about plans, including plan IDs.
   * 
   * @example
   * 1234
   */
  planId?: string;
  /**
   * @remarks
   * The execution mode of the plan. Valid values:
   * 
   * *   **Postpone**: The plan is executed later.
   * *   **Regular**: The plan is executed periodically.
   * 
   * @example
   * Regular
   */
  planScheduleType?: string;
  /**
   * @remarks
   * The type of the plan. Valid values:
   * 
   * *   **PauseResume**: pauses and resumes an instance.
   * *   **Resize**: scales an instance.
   * *   **ModifySpec**: changes compute node specifications.
   * 
   * @example
   * PauseResume
   */
  planType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      planCreateDate: 'PlanCreateDate',
      planDesc: 'PlanDesc',
      planId: 'PlanId',
      planScheduleType: 'PlanScheduleType',
      planType: 'PlanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      planCreateDate: 'string',
      planDesc: 'string',
      planId: 'string',
      planScheduleType: 'string',
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

