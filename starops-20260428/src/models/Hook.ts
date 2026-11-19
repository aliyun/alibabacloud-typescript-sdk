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
   * The execution instruction. For the prompt type, it is a prompt. For the bash type, it is a Bash script. For the python3 type, it is a Python 3 script. For the hint type, it is text directly appended to the contextual text. Non-empty UTF-8 text must be provided for all four types.
   * 
   * @example
   * Check whether the current tool invoke is safe.
   */
  instruction?: string;
  /**
   * @remarks
   * The maximum number of retries, which specifies the number of additional attempts after a failure. Valid values: 0 to 3.
   * 
   * @example
   * 0
   */
  maxRetry?: number;
  /**
   * @remarks
   * The timeout in seconds, ranging from 1 to 30 seconds. All attempts and waits for this Hook share this timeout.
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
   * Specifies whether debug mode is enabled.
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
   * Check whether the command in the tool invoke is safe.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the Hook is enabled. It is executed only when set to true, and is disabled if not configured.
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
   * The execution configuration, which specifies the synchronous execution, total timeout, number of retries, and handling policy for invalid return values of the Hook.
   */
  execution?: HookExecution;
  /**
   * @remarks
   * Specifies whether to hide Hook call events. When set to true, Hook call events are not sent to the frontend, regardless of whether debug mode is enabled.
   * 
   * @example
   * false
   */
  invisible?: boolean;
  /**
   * @remarks
   * The tool name list. Only ToolStart and ToolEnd perform an exact match on the actual tool names. Tool names such as Read, Write, Bash, and Edit are supported, but wildcards are not supported. An empty array imposes no restrictions on tools, and this field is ignored for other events.
   * 
   * @example
   * ["Read","Write","Bash","Edit"]
   */
  match?: string[];
  /**
   * @remarks
   * The Hook name. Only digits, letters, underscores, and hyphens are allowed, and it cannot be empty. Hooks with the same name are executed independently in the order they appear in the list.
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
   * The effective scope. A value of all applies to both Chat and Mission scenarios. A value of chat or mission applies only to the corresponding scenario.
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

