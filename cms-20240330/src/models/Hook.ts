// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HookExecution extends $dara.Model {
  /**
   * @remarks
   * The invalid return value handling policy. If the handler return value is still invalid after retries, it is processed as allow or reject.
   * 
   * @example
   * allow
   */
  failResult?: string;
  /**
   * @remarks
   * The execution instruction. For the prompt type, it is a prompt. For the bash type, it is a Bash script. For the python3 type, it is a Python 3 script. For the hint type, it is contextual text directly appended. Non-empty UTF-8 text must be provided for all four types.
   * 
   * @example
   * Check whether the current tool call is safe.
   */
  instruction?: string;
  /**
   * @remarks
   * The maximum number of retries. Specifies the number of additional attempts after a failure. Valid values: 0 to 3.
   * 
   * @example
   * 0
   */
  maxRetry?: number;
  /**
   * @remarks
   * The timeout period in seconds. Valid values: 1 to 30. All attempts and waits for this Hook share this timeout period.
   * 
   * @example
   * 10
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The handler type. Only prompt, bash, python3, and hint are supported.
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
   * Specifies whether to enable debug mode.
   * 
   * @example
   * false
   */
  debug?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Check whether the commands in tool calls are safe.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the Hook is enabled. It is executed only when this parameter is set to true. If not configured, the Hook is disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The event. Each Hook processes only one event.
   * 
   * @example
   * ToolStart
   */
  event?: string;
  /**
   * @remarks
   * The execution configuration. Configures the synchronous execution, total timeout, number of retries, and invalid return value handling policy for the Hook.
   */
  execution?: HookExecution;
  /**
   * @remarks
   * Specifies whether to hide Hook invocation events. When set to true, Hook invocation events are not sent to the frontend, regardless of whether debug mode is enabled.
   * 
   * @example
   * false
   */
  invisible?: boolean;
  /**
   * @remarks
   * The list of tool names. Only ToolStart and ToolEnd perform an exact match based on the actual tool name. Tool names such as Read, Write, Bash, and Edit are supported. Wildcards are not supported. An empty array does not restrict tools. This field is ignored for other events.
   * 
   * @example
   * ["Read","Write","Bash","Edit"]
   */
  match?: string[];
  /**
   * @remarks
   * The Hook name. Only digits, letters, underscores, and hyphens are allowed, and it cannot be empty. Hooks with the same name are executed independently in the order of the list.
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
   * The effective scope. A value of all indicates Chat and Mission. A value of chat or mission indicates that the Hook takes effect only in the corresponding scenario.
   * 
   * @example
   * all
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      debug: 'debug',
      description: 'description',
      enable: 'enable',
      event: 'event',
      execution: 'execution',
      invisible: 'invisible',
      match: 'match',
      name: 'name',
      schemaVersion: 'schemaVersion',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'boolean',
      description: 'string',
      enable: 'boolean',
      event: 'string',
      execution: HookExecution,
      invisible: 'boolean',
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

