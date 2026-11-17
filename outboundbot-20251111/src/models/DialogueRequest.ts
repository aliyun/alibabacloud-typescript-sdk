// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON array string of additional input events. Supports DTMF key press events (dataType=DTMF, dtmf is the key content), Silence events (dataType=Silence), and RuntimePrompts events (dataType=RuntimePrompts, prompts is the prompt text, persistent specifies whether to persist). For example, a silence event is [{"dataType":"Silence"}]. This parameter is optional when no additional events are present.
   * 
   * @example
   * [{"dataType":"Silence"}]
   */
  extras?: string;
  /**
   * @remarks
   * The instance identity of the associated product. You must use an instance that the invoker has permission to access and that actually exists. It must be consistent with the instance to which the scenario, channel, and session belong. The maximum length is subject to the current POP parameter definition.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the conversation scenario under the instance. Specify an existing scenario. Subsequent conversations and end requests for the same text session must use the scenario specified when the session was initiated.
   * 
   * @example
   * script-example-001
   */
  scriptId?: string;
  /**
   * @remarks
   * The session ID used to uniquely associate this interaction. For a text session, it is the text- identifier returned when the session is initiated. For web voice, it is the ws- identifier. For real number outbound call tests, it is the test- identifier. Subsequent calls must use the actual returned value.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  /**
   * @remarks
   * The text input content of the user for the current round. For normal conversations, pass the actual text of the user. Events such as key presses or silence can be passed through Extras. The processing method is determined by the scenario and the engine.
   * 
   * @example
   * I would like to inquire about the business handling process
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      extras: 'Extras',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extras: 'string',
      instanceId: 'string',
      scriptId: 'string',
      sessionId: 'string',
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

