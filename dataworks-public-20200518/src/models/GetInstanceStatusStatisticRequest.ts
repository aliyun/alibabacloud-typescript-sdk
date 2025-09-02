// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceStatusStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which the numbers of instances in different states are obtained. Specify the date in the yyyy-MM-dd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-01-01
   */
  bizDate?: string;
  /**
   * @remarks
   * The type of the directed acyclic graph (DAG). Valid values:
   * 
   * *   MANUAL: DAG for a manually triggered workflow
   * *   SMOKE_TEST: DAG for a smoke testing workflow
   * *   SUPPLY_DATA: DAG for a data backfill instance
   * *   BUSINESS_PROCESS_DAG: DAG for a one-time workflow
   * 
   * <!---->
   * 
   * *   DAILY
   * *   MANUAL
   * *   SMOKE_TEST
   * *   SUPPLY_DATA
   * *   BUSINESS_PROCESS_DAG
   * 
   * @example
   * MANUAL
   */
  dagType?: string;
  /**
   * @remarks
   * The runtime environment. Valid values: PROD and DEV.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The scheduling cycle. Valid values:
   * 
   * *   MINUTE
   * *   HOUR
   * *   DAY
   * *   WEEK
   * *   MONTH
   * 
   * @example
   * DAY
   */
  schedulerPeriod?: string;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: auto triggered node
   * *   MANUAL: manually triggered node
   * *   PAUSE: paused node
   * *   SKIP: dry-run node
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dagType: 'DagType',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      schedulerPeriod: 'SchedulerPeriod',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dagType: 'string',
      projectEnv: 'string',
      projectId: 'number',
      schedulerPeriod: 'string',
      schedulerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

