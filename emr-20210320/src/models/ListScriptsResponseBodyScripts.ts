// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeSelector } from "./NodeSelector";


export class ListScriptsResponseBodyScripts extends $dara.Model {
  /**
   * @remarks
   * API name.
   * 
   * @example
   * ListScripts
   */
  action?: string;
  /**
   * @remarks
   * End execution time. This value is returned only when `ScriptType` is `NORMAL`.
   * 
   * @example
   * 1639715635819
   */
  endTime?: number;
  /**
   * @remarks
   * Execution failure strategy. Possible values:
   * 
   * - FAILED_CONTINUE: Continue after failure.
   * - FAILED_BLOCK: Block after failure.
   * 
   * @example
   * FAILED_CONTINUE
   */
  executionFailStrategy?: string;
  /**
   * @remarks
   * Execution timing. Possible values:
   * 
   * - BEFORE_INSTALL: Before application installation.
   * - AFTER_STARTED: After application startup.
   * 
   * @example
   * BEFORE_INSTALL
   */
  executionMoment?: string;
  /**
   * @remarks
   * Script execution state. This value is returned only when `ScriptType` is `NORMAL`. Possible values:
   * 
   * - SCRIPT_COMPLETED: Script executed successfully.
   * - SCRIPT_SUBMISSION_FAILED: Script execution failed.
   * - SCRIPT_RUNNING: Script is running.
   * 
   * @example
   * SCRIPT_COMPLETED
   */
  executionState?: string;
  /**
   * @remarks
   * Time of the last update.
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
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Script execution parameters.
   * 
   * @example
   * --mode=client -h -p
   */
  scriptArgs?: string;
  /**
   * @remarks
   * Script ID.
   * 
   * @example
   * cs-bf25219d103043a0820613e32781****
   */
  scriptId?: string;
  /**
   * @remarks
   * Script name.
   * 
   * @example
   * check_env
   */
  scriptName?: string;
  /**
   * @remarks
   * Script path.
   * 
   * @example
   * oss://bucket1/check_evn.sh
   */
  scriptPath?: string;
  /**
   * @remarks
   * Start execution time. This value is returned only when `ScriptType` is `NORMAL`.
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

