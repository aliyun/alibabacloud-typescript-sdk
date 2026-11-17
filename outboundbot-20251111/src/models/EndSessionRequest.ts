// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance identity of the associated product. You must use an existing instance that the invoker is authorized to access. The instance must match the instance to which the scenario, channel, and session belong. The maximum length is subject to the current POP parameter definitions.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the dialog scenario under the instance. You must specify an existing scenario. Subsequent dialog and session termination requests for the same text session must use the same scenario that was used to start the session.
   * 
   * @example
   * script-example-001
   */
  scriptId?: string;
  /**
   * @remarks
   * The session ID used to uniquely identify the current interaction. For a text session, use the text- prefixed ID returned when the session is started. For web voice, use the ws- prefixed ID. For outbound call tests with real numbers, use the test- prefixed ID. Subsequent calls must use the actual returned values.
   * 
   * This parameter is required.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

