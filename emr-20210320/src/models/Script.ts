// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeSelector } from "./NodeSelector";


export class Script extends $dara.Model {
  /**
   * @remarks
   * 执行失败策略。
   * 
   * @example
   * FAILED_CONTINUE
   */
  executionFailStrategy?: string;
  /**
   * @remarks
   * 脚本的执行时机。
   * 
   * @example
   * BEFORE_INSTALL
   */
  executionMoment?: string;
  /**
   * @remarks
   * 节点选择器。
   * 
   * This parameter is required.
   */
  nodeSelector?: NodeSelector;
  /**
   * @remarks
   * 脚本执行优先级。取值范围：1~100。
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  priority?: number;
  /**
   * @remarks
   * 脚本执行参数。
   * 
   * @example
   * -host 10.0.10.5 -m 30
   */
  scriptArgs?: string;
  /**
   * @remarks
   * 脚本名称。长度为1~64个字符，必须以大小字母或中文开头，不能以http://和https://开头。可以包含中文、英文、数字、下划线（_）、或者短划线（-）
   * 
   * This parameter is required.
   * 
   * @example
   * 脚本名-1
   */
  scriptName?: string;
  /**
   * @remarks
   * 脚本所在OSS路径。
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

