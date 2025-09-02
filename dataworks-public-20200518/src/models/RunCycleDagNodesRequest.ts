// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCycleDagNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * *   SMS
   * *   MAIL
   * *   SMS_MAIL
   * 
   * @example
   * SMS
   */
  alertNoticeType?: string;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * *   SUCCESS: An alert is generated when data backfill succeeds.
   * *   FAILURE: An alert is generated when data backfill fails.
   * *   SUCCESS_FAILURE: An alert is generated regardless of whether data backfill succeeds or fails.
   * 
   * @example
   * FAILURE
   */
  alertType?: string;
  /**
   * @remarks
   * The time when the node starts to run. This parameter is required only for auto triggered nodes that are scheduled by hour. Specify the value in the HH:mm:ss format. Valid values: 00:00:00 to 23:59:59.
   * 
   * @example
   * 00:00:00
   */
  bizBeginTime?: string;
  /**
   * @remarks
   * The time when the node stops running. This parameter is required only for auto triggered nodes that are scheduled by hour. Specify the value in the HH:mm:ss format. Valid values: 00:00:00 to 23:59:59.
   * 
   * @example
   * 01:00:00
   */
  bizEndTime?: string;
  /**
   * @remarks
   * The number of nodes that can run in parallel. Valid values: 2 to 10.
   * 
   * @example
   * 5
   */
  concurrentRuns?: number;
  /**
   * @remarks
   * The data timestamp at which data is no longer backfilled. Specify the value in the yyyy-MM-dd 00:00:00 format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-21 00:00:00
   */
  endBizDate?: string;
  /**
   * @remarks
   * The IDs of the nodes for which no data needs to be backfilled. The system generates dry-run instances for all these nodes. After these dry-run instances are scheduled, the statuses of these instances are directly set to successful, but the script is not run.
   * 
   * @example
   * 1234,123465
   */
  excludeNodeIds?: string;
  /**
   * @remarks
   * The ID of the node for which you want to backfill data. If you want to backfill data for multiple nodes, separate the IDs of the nodes with commas (,). You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to obtain the node ID.
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
   * The parameters that need to be configured for the node. Set this parameter to a JSON string. The key indicates the ID of the node, and the value indicates the actual values of the parameters.
   * 
   * @example
   * {74324:"a=123 b=456"}
   */
  nodeParams?: string;
  /**
   * @remarks
   * Specifies whether data can be backfilled for multiple nodes at the same time.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  parallelism?: boolean;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV. The value PROD indicates the production environment, and the value DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The ID of the node for which data is first backfilled. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to obtain the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  rootNodeId?: number;
  /**
   * @remarks
   * The data timestamp at which data starts to be backfilled. Specify the value in the yyyy-MM-dd 00:00:00 format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-20 00:00:00
   */
  startBizDate?: string;
  /**
   * @remarks
   * Specifies whether to immediately run an instance that is scheduled to run in the future. If you set this parameter to true, the instance that is scheduled to run in the future is run immediately. Otherwise, the instance is run as scheduled.
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

