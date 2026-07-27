// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDagComplementRequest extends $dara.Model {
  /**
   * @remarks
   * An optional parameter. The start time of the task. This parameter is required for hour-level scheduled tasks.
   * 
   * @example
   * 00:00:00
   */
  bizBeginTime?: string;
  /**
   * @remarks
   * An optional parameter. The end time of the task. This parameter is required for hour-level scheduled tasks.
   * 
   * @example
   * 23:00:00
   */
  bizEndTime?: string;
  /**
   * @remarks
   * The end business date of data backfill.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-21 00:00:00
   */
  endBizDate?: string;
  /**
   * @remarks
   * An optional parameter. The list of node IDs to exclude from data backfill.
   * 
   * @example
   * 1234
   */
  excludeNodeIds?: string;
  /**
   * @remarks
   * The list of node IDs to include. If you backfill data for only one node, that node must be included in includeNodeIds.
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
   * A JSON string. The key is the node ID, and the value is the actual parameter value.
   * 
   * @example
   * {74324:"key1=val1 key2=val"}
   */
  nodeParams?: string;
  /**
   * @remarks
   * Specifies whether the task can be executed concurrently.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  parallelism?: boolean;
  /**
   * @remarks
   * The environment of the workspace, including PROD and DEV.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The ID of the start node for data backfill.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  rootNodeId?: number;
  /**
   * @remarks
   * The start business date of data backfill.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-20 00:00:00
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      endBizDate: 'EndBizDate',
      excludeNodeIds: 'ExcludeNodeIds',
      includeNodeIds: 'IncludeNodeIds',
      name: 'Name',
      nodeParams: 'NodeParams',
      parallelism: 'Parallelism',
      projectEnv: 'ProjectEnv',
      rootNodeId: 'RootNodeId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizBeginTime: 'string',
      bizEndTime: 'string',
      endBizDate: 'string',
      excludeNodeIds: 'string',
      includeNodeIds: 'string',
      name: 'string',
      nodeParams: 'string',
      parallelism: 'boolean',
      projectEnv: 'string',
      rootNodeId: 'number',
      startBizDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

