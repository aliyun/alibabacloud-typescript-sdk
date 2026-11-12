// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HookExecution extends $dara.Model {
  /**
   * @remarks
   * The handling policy for invalid return values. If the handler return value remains invalid after retries, it is processed as allow or reject.
   * 
   * @example
   * allow
   */
  failResult?: string;
  /**
   * @remarks
   * The execution instruction. The prompt type indicates a prompt, the bash type indicates a Bash script, the python3 type indicates a Python 3 script, and the hint type indicates contextual text directly appended. A non-empty UTF-8 text must be provided for all four types.
   * 
   * @example
   * 检查当前工具调用是否安全。
   */
  instruction?: string;
  /**
   * @remarks
   * The maximum number of additional attempts after a failure. Valid values: 0 to 3.
   * 
   * @example
   * 0
   */
  maxRetry?: number;
  /**
   * @remarks
   * The timeout period in seconds. Valid values: 1 to 30. All attempts and waits for the Hook share this timeout period.
   * 
   * @example
   * 10
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The handler type. Valid values: prompt, bash, python3, and hint.
   * 
   * @example
   * prompt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      failResult: 'failResult',
      instruction: 'instruction',
      maxRetry: 'maxRetry',
      timeoutSeconds: 'timeoutSeconds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failResult: 'string',
      instruction: 'string',
      maxRetry: 'number',
      timeoutSeconds: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Hook extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 检查工具调用中的命令是否安全。
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the Hook is enabled. The Hook is executed only when this parameter is set to true. If not configured, the Hook is disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The event processed by the Hook. Each Hook processes only one event.
   * 
   * @example
   * ToolStart
   */
  event?: string;
  /**
   * @remarks
   * The execution configuration that specifies the synchronous execution, total timeout, number of retries, and invalid return value handling policy for the Hook.
   */
  execution?: HookExecution;
  /**
   * @remarks
   * The list of tool names. Only ToolStart and ToolEnd events perform exact matching based on the actual tool name. Tool names such as Read, Write, Bash, and Edit are supported, but wildcards are not supported. An empty array does not restrict tools. This field is ignored for other events.
   * 
   * @example
   * ["Read","Write","Bash","Edit"]
   */
  match?: string[];
  /**
   * @remarks
   * The Hook name. Only digits, letters, underscores, and hyphens are allowed. The name cannot be empty. Hooks with the same name are still executed independently in the order of the list.
   * 
   * @example
   * command-guard
   */
  name?: string;
  /**
   * @remarks
   * The configuration protocol version.
   * 
   * @example
   * v1
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The effective scope. Valid values: all, chat, and mission. A value of all indicates that the scope includes Chat and Mission. A value of chat or mission indicates that the scope applies only to the corresponding scenario.
   * 
   * @example
   * all
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      enable: 'enable',
      event: 'event',
      execution: 'execution',
      match: 'match',
      name: 'name',
      schemaVersion: 'schemaVersion',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enable: 'boolean',
      event: 'string',
      execution: HookExecution,
      match: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaVersion: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(this.execution && typeof (this.execution as any).validate === 'function') {
      (this.execution as any).validate();
    }
    if(Array.isArray(this.match)) {
      $dara.Model.validateArray(this.match);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

