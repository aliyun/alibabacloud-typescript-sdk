// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HookExecution extends $dara.Model {
  /**
   * @remarks
   * The handling policy for invalid return values. If the return value of the handler remains invalid after retries, it is processed as allow or reject.
   * 
   * @example
   * allow
   */
  failResult?: string;
  /**
   * @remarks
   * The execution instruction. For the prompt type, it specifies a prompt. For the bash type, it specifies a Bash script. For the python3 type, it specifies a Python 3 script. For the hint type, it specifies contextual text that is directly appended. You must provide non-empty UTF-8 text for all four types.
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
   * The timeout period in seconds. Valid values: 1 to 30. All attempts and waits for the hook share this timeout period.
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
   * Specifies whether the hook is enabled. The hook is executed only when this parameter is set to true. If this parameter is not configured, the hook is disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The event. Each hook processes only one event.
   * 
   * @example
   * ToolStart
   */
  event?: string;
  /**
   * @remarks
   * The execution configuration. This configuration specifies the synchronous execution, total timeout, number of retries, and handling policy for invalid return values of the hook.
   */
  execution?: HookExecution;
  /**
   * @remarks
   * The list of tool names. Only the ToolStart and ToolEnd events perform an exact match on the actual tool names. Tool names such as Read, Write, Bash, and Edit are supported, but wildcards are not supported. An empty array does not restrict the tools, and this field is ignored for other events.
   * 
   * @example
   * ["Read","Write","Bash","Edit"]
   */
  match?: string[];
  /**
   * @remarks
   * Only digits, letters, underscores, and hyphens are allowed, and the value cannot be empty. Hooks with the same name are executed independently in the order they appear in the list.
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
   * The effective scope. A value of all indicates that the hook takes effect in both Chat and Mission scenarios. A value of chat or mission indicates that the hook takes effect only in the corresponding scenario.
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

