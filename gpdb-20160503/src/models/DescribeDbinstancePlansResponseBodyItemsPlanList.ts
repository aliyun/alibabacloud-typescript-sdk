// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePlansResponseBodyItemsPlanList extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The execution information of the plan.
   * 
   * @example
   * {"pause":{"planCronTime":"0 22 * * 5"},"resume":{"planCronTime":"0 23 * * 5"}}
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
   * The end time of the plan. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > 
   * 
   * *   This parameter is returned only for the plans that are periodically executed.
   * 
   * *   If you did not specify the end time when you created the plan, this parameter is not returned.
   * 
   * @example
   * 2023-04-17T23:00Z
   */
  planEndDate?: string;
  /**
   * @remarks
   * The plan ID.
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
   * The start time of the plan. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > 
   * 
   * *   This parameter is returned only for the plans that are periodically executed.
   * 
   * *   If you did not specify the start time when you created the plan, the current time is returned.
   * 
   * @example
   * 2022-04-17T23:00Z
   */
  planStartDate?: string;
  /**
   * @remarks
   * The status of the plan. Valid values:
   * 
   * *   **active**
   * *   **cancel**
   * *   **deleted**
   * *   **finished**
   * 
   * @example
   * active
   */
  planStatus?: string;
  /**
   * @remarks
   * The type of the plan. Valid values:
   * 
   * *   **PauseResume**: pauses and resumes an instance.
   * *   **Resize**: scales an instance.
   * 
   * @example
   * PauseResume
   */
  planType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      planConfig: 'PlanConfig',
      planDesc: 'PlanDesc',
      planEndDate: 'PlanEndDate',
      planId: 'PlanId',
      planName: 'PlanName',
      planScheduleType: 'PlanScheduleType',
      planStartDate: 'PlanStartDate',
      planStatus: 'PlanStatus',
      planType: 'PlanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      planConfig: 'string',
      planDesc: 'string',
      planEndDate: 'string',
      planId: 'string',
      planName: 'string',
      planScheduleType: 'string',
      planStartDate: 'string',
      planStatus: 'string',
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

