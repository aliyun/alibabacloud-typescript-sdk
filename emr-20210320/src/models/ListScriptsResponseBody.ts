// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeSelector } from "./NodeSelector";


export class ListScriptsResponseBodyScripts extends $dara.Model {
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * ListScripts
   */
  action?: string;
  /**
   * @remarks
   * The time when the execution ended. This parameter is returned only when ScriptType is set to NORMAL.
   * 
   * @example
   * 1639715635819
   */
  endTime?: number;
  /**
   * @remarks
   * The policy used to handle an execution failure. Valid values:
   * 
   * - FAILED_CONTINUE: Continue the execution.
   * 
   * - FAILED_BLOCK: Block the execution.
   * 
   * @example
   * FAILED_CONTINUE
   */
  executionFailStrategy?: string;
  /**
   * @remarks
   * The time to execute the script. Valid values:
   * 
   * - BEFORE_INSTALL: before application installation.
   * 
   * - AFTER_STARTED: after application startup.
   * 
   * @example
   * BEFORE_INSTALL
   */
  executionMoment?: string;
  /**
   * @remarks
   * The execution status of the script. This parameter is returned only when `ScriptType` is set to `NORMAL`. Valid values:
   * 
   * - SCRIPT_COMPLETED: The script is successfully executed.
   * 
   * - SCRIPT_SUBMISSION_FAILED: The script fails to be executed.
   * 
   * - SCRIPT_RUNNING: The script is being executed.
   * 
   * @example
   * SCRIPT_COMPLETED
   */
  executionState?: string;
  /**
   * @remarks
   * The time when the script was last updated.
   * 
   * @example
   * 1639714634819
   */
  lastUpdateTime?: number;
  /**
   * @remarks
   * The node selector.
   */
  nodeSelector?: NodeSelector;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The runtime parameters of the script.
   * 
   * @example
   * --mode=client -h -p
   */
  scriptArgs?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * cs-bf25219d103043a0820613e32781****
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * check_env
   */
  scriptName?: string;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * oss://bucket1/check_evn.sh
   */
  scriptPath?: string;
  /**
   * @remarks
   * The time when the execution started. This parameter is returned only when ScriptType is set to NORMAL.
   * 
   * @example
   * 1639714634000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      endTime: 'EndTime',
      executionFailStrategy: 'ExecutionFailStrategy',
      executionMoment: 'ExecutionMoment',
      executionState: 'ExecutionState',
      lastUpdateTime: 'LastUpdateTime',
      nodeSelector: 'NodeSelector',
      regionId: 'RegionId',
      scriptArgs: 'ScriptArgs',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptPath: 'ScriptPath',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      endTime: 'number',
      executionFailStrategy: 'string',
      executionMoment: 'string',
      executionState: 'string',
      lastUpdateTime: 'number',
      nodeSelector: NodeSelector,
      regionId: 'string',
      scriptArgs: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptPath: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(this.nodeSelector && typeof (this.nodeSelector as any).validate === 'function') {
      (this.nodeSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned in the request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * dd6b1b2a-5837-5237-abe4-ff0c89568982
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of scripts.
   */
  scripts?: ListScriptsResponseBodyScripts[];
  /**
   * @remarks
   * The total number of entries that meet the request conditions.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scripts: 'Scripts',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      scripts: { 'type': 'array', 'itemType': ListScriptsResponseBodyScripts },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scripts)) {
      $dara.Model.validateArray(this.scripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

