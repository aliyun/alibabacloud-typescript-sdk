// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueRequest extends $dara.Model {
  /**
   * @remarks
   * Extras.
   * For example, a silence timeout: [{"dataType":"Silence"}]
   * >Notice: Valid values for `dataType`: `DTMF`, `Silence`, or `RuntimePrompts`.
   * 
   * > - If `dataType` is `DTMF`, use the format: `[{"dataType":"DTMF","dtmf":"xxxx"}]`
   * >
   * > - If `dataType` is `Silence`, use the format: `[{"dataType":"Silence"}]`
   * >
   * > - If `dataType` is `RuntimePrompts`, use the format: `[{"dataType":"RuntimePrompts","prompts":"xxxx","persistent":false/true}]`
   * 
   * @example
   * [{
   * 	"dataType": "Silence"
   * }]
   */
  extras?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 0a88e269-01f5-49ac-97af-5830f0ccb271
   */
  scriptId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 07d72ea0-6e38-48d4-8371-14deaaba996f
   */
  sessionId?: string;
  /**
   * @remarks
   * The user\\"s input for the conversational turn.
   * 
   * @example
   * 行吧，那我就不打扰您了，再见。
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

