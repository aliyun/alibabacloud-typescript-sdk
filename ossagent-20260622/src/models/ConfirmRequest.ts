// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmRequestToolCalls extends $dara.Model {
  /**
   * @remarks
   * The tool ID, returned by the Chat operation.
   * 
   * @example
   * call_662cc029b3444d8d923a7ea6
   */
  id?: string;
  /**
   * @remarks
   * The command to execute for the tool calling operation, returned by the Chat operation.
   * 
   * @example
   * {
   *     "command": "api put-bucket-acl --bucket xxx --acl private",
   *     "region": "cn-hangzhou"
   * }
   */
  modifiedInput?: { [key: string]: any };
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * ossutil_safe
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      modifiedInput: 'modifiedInput',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      modifiedInput: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.modifiedInput) {
      $dara.Model.validateMap(this.modifiedInput);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to approve the tool execution.
   * 
   * @example
   * true
   */
  confirmed?: boolean;
  /**
   * @remarks
   * The current execution phase.
   * 
   * @example
   * PARAM_INPUT
   */
  phase?: string;
  /**
   * @remarks
   * The reason for whether to call the tool.
   * 
   * @example
   * null
   */
  reason?: string;
  /**
   * @remarks
   * The Q&A session ID.
   * 
   * @example
   * UUID
   */
  sessionId?: string;
  /**
   * @remarks
   * The tool invocations.
   */
  toolCalls?: ConfirmRequestToolCalls[];
  static names(): { [key: string]: string } {
    return {
      confirmed: 'confirmed',
      phase: 'phase',
      reason: 'reason',
      sessionId: 'sessionId',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmed: 'boolean',
      phase: 'string',
      reason: 'string',
      sessionId: 'string',
      toolCalls: { 'type': 'array', 'itemType': ConfirmRequestToolCalls },
    };
  }

  validate() {
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

