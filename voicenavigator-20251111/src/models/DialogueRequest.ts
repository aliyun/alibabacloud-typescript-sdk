// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueRequest extends $dara.Model {
  /**
   * @example
   * [{
   * 	"dataType": "Silence"
   * }]
   */
  extras?: string;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @example
   * 0a88e269-01f5-49ac-97af-5830f0ccb271
   */
  scriptId?: string;
  /**
   * @example
   * 07d72ea0-6e38-48d4-8371-14deaaba996f
   */
  sessionId?: string;
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

