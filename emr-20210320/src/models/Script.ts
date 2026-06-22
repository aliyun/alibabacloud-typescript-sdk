// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeSelector } from "./NodeSelector";


export class Script extends $dara.Model {
  /**
   * @remarks
   * The execution failure strategy. Valid values:
   * 
   * - `FAILED_CONTINUE`: If the script fails, cluster creation or scaling continues.
   * 
   * - `FAILED_BLOCK`: If the script fails, cluster creation or scaling is blocked.
   * 
   * @example
   * FAILED_CONTINUE
   */
  executionFailStrategy?: string;
  /**
   * @remarks
   * The execution timing for the script. Valid values:
   * 
   * - `BEFORE_INSTALL`: The script runs before applications are installed.
   * 
   * - `AFTER_STARTED`: The script runs after applications start.
   * 
   * @example
   * BEFORE_INSTALL
   */
  executionMoment?: string;
  /**
   * @remarks
   * Specifies the nodes on which the script runs.
   * 
   * This parameter is required.
   */
  nodeSelector?: NodeSelector;
  /**
   * @remarks
   * > This parameter is deprecated. Scripts run in the order they are defined.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  priority?: number;
  /**
   * @remarks
   * The optional script execution arguments.
   * 
   * @example
   * -host 10.0.10.5 -m 30
   */
  scriptArgs?: string;
  /**
   * @remarks
   * The required script name. The name must be 1 to 64 characters long and start with a letter or a Chinese character. It cannot start with `http://` or `https://`. It can contain Chinese characters, letters, numbers, underscores (`_`), or hyphens (`-`).
   * 
   * This parameter is required.
   * 
   * @example
   * 脚本名-1
   */
  scriptName?: string;
  /**
   * @remarks
   * The required path to the script in Object Storage Service (OSS). The path must start with `oss://`.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket1/update_hosts.sh
   */
  scriptPath?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      executionMoment: 'ExecutionMoment',
      nodeSelector: 'NodeSelector',
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
      nodeSelector: NodeSelector,
      priority: 'number',
      scriptArgs: 'string',
      scriptName: 'string',
      scriptPath: 'string',
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

