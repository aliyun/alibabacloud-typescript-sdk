// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeSelector } from "./NodeSelector";


export class ClusterScript extends $dara.Model {
  /**
   * @example
   * 取值:FAILED_CONTINUE, FAILED_BLOCKED
   */
  executionFailStrategy?: string;
  /**
   * @example
   * 取值:BEFORE_INSTALL, AFTER_STARTED
   */
  executionMoment?: string;
  nodeSelect?: NodeSelector;
  priority?: number;
  scriptArgs?: string;
  scriptName?: string;
  scriptPath?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      executionMoment: 'ExecutionMoment',
      nodeSelect: 'NodeSelect',
      priority: 'Priority',
      scriptArgs: 'ScriptArgs',
      scriptName: 'ScriptName',
      scriptPath: 'ScriptPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      executionMoment: 'string',
      nodeSelect: NodeSelector,
      priority: 'number',
      scriptArgs: 'string',
      scriptName: 'string',
      scriptPath: 'string',
    };
  }

  validate() {
    if(this.nodeSelect && typeof (this.nodeSelect as any).validate === 'function') {
      (this.nodeSelect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

