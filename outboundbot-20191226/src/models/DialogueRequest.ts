// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueRequest extends $dara.Model {
  /**
   * @remarks
   * Action to perform for outbound calls. Hangup ends the call.
   * 
   * @example
   * broadcast
   */
  actionKey?: string;
  /**
   * @remarks
   * Parameters required to perform the action. (Deprecated)
   * 
   * @example
   * ""
   */
  actionParams?: string;
  /**
   * @remarks
   * Call ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1528189846043
   */
  callId?: string;
  /**
   * @remarks
   * Call type, typically Outbound
   * 
   * This parameter is required.
   * 
   * @example
   * Outbound
   */
  callType?: string;
  /**
   * @remarks
   * Called number
   * 
   * This parameter is required.
   * 
   * @example
   * 135****4353
   */
  calledNumber?: string;
  /**
   * @remarks
   * Calling number
   * 
   * This parameter is required.
   * 
   * @example
   * 1***6
   */
  callingNumber?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * 6cea9bed-63e6-439e-ae4c-b3333efff53d
   */
  scenarioId?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * ff44709e-39a6-43ba-959b-20fcabe3e496
   */
  taskId?: string;
  /**
   * @remarks
   * User utterance
   * 
   * This parameter is required.
   * 
   * @example
   * 是的
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionParams: 'ActionParams',
      callId: 'CallId',
      callType: 'CallType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      taskId: 'TaskId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionParams: 'string',
      callId: 'string',
      callType: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      instanceId: 'string',
      scenarioId: 'string',
      scriptId: 'string',
      taskId: 'string',
      utterance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

