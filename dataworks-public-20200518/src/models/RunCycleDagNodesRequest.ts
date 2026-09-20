// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCycleDagNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * - SMS: text message.
   * - MAIL: email.
   * - SMS_MAIL: text message and email.
   * 
   * @example
   * SMS
   */
  alertNoticeType?: string;
  /**
   * @remarks
   * The Alarm Metric. Valid values:
   * - SUCCESS: Alerting on success.
   * - FAILURE: Alerting on failed.
   * - SUCCESS_FAILURE: Alerting on success or failed.
   * 
   * @example
   * FAILURE
   */
  alertType?: string;
  /**
   * @remarks
   * The start time of the node. This parameter is required only for hourly scheduled nodes. Format: HH:mm:ss. Valid values: 00:00:00 to 23:59:59.
   * 
   * @example
   * 00:00:00
   */
  bizBeginTime?: string;
  /**
   * @remarks
   * The end time of the node. This parameter is required only for hourly scheduled nodes. Format: HH:mm:ss. Valid values: 00:00:00 to 23:59:59.
   * 
   * @example
   * 01:00:00
   */
  bizEndTime?: string;
  /**
   * @remarks
   * The number of concurrent nodes. Valid values: 2 to 10.
   * 
   * @example
   * 5
   */
  concurrentRuns?: number;
  /**
   * @remarks
   * The end business date for data backfill. Format: yyyy-MM-dd 00:00:00.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-21 00:00:00
   */
  endBizDate?: string;
  /**
   * @remarks
   * The list of node IDs that do not require data backfill. Nodes in this list generate dry-run instances. After a dry-run instance is scheduled, it directly succeeds without executing the script content.
   * 
   * @example
   * 1234,123465
   */
  excludeNodeIds?: string;
  /**
   * @remarks
   * The node IDs for data backfill. Separate multiple node IDs with commas (,). You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to obtain node IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 74324,74325
   */
  includeNodeIds?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * xm_test
   */
  name?: string;
  /**
   * @remarks
   * A JSON string in which the key is the node ID and the value is the actual parameter value.
   * 
   * @example
   * {"74324":"a=123 b=456"}
   */
  nodeParams?: string;
  /**
   * @remarks
   * Specifies whether nodes across multiple business dates can run in parallel.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  parallelism?: boolean;
  /**
   * @remarks
   * The environment of the workspace. PROD indicates the production environment. DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The ID of the start node for data backfill. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to obtain the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  rootNodeId?: number;
  /**
   * @remarks
   * The start business date for data backfill. Format: yyyy-MM-dd 00:00:00.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-20 00:00:00
   */
  startBizDate?: string;
  /**
   * @remarks
   * Specifies whether to immediately run instances whose scheduling time is in the future. If this parameter is set to true, instances with a scheduling time later than the current time run immediately. Otherwise, the instances wait until the scheduling time.
   * 
   * @example
   * false
   */
  startFutureInstanceImmediately?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertNoticeType: 'AlertNoticeType',
      alertType: 'AlertType',
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      concurrentRuns: 'ConcurrentRuns',
      endBizDate: 'EndBizDate',
      excludeNodeIds: 'ExcludeNodeIds',
      includeNodeIds: 'IncludeNodeIds',
      name: 'Name',
      nodeParams: 'NodeParams',
      parallelism: 'Parallelism',
      projectEnv: 'ProjectEnv',
      rootNodeId: 'RootNodeId',
      startBizDate: 'StartBizDate',
      startFutureInstanceImmediately: 'StartFutureInstanceImmediately',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNoticeType: 'string',
      alertType: 'string',
      bizBeginTime: 'string',
      bizEndTime: 'string',
      concurrentRuns: 'number',
      endBizDate: 'string',
      excludeNodeIds: 'string',
      includeNodeIds: 'string',
      name: 'string',
      nodeParams: 'string',
      parallelism: 'boolean',
      projectEnv: 'string',
      rootNodeId: 'number',
      startBizDate: 'string',
      startFutureInstanceImmediately: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

