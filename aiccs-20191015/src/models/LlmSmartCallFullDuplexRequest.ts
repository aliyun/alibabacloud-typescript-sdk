// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallFullDuplexRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app123
   */
  applicationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0987654321
   */
  callerNumber?: string;
  /**
   * @example
   * out123
   */
  outId?: string;
  /**
   * @example
   * 120
   */
  sessionTimeout?: number;
  startWordParam?: { [key: string]: any };
  /**
   * @example
   * 70
   */
  ttsSpeed?: number;
  /**
   * @example
   * V745A7CED
   */
  ttsVoiceCode?: string;
  /**
   * @example
   * 100
   */
  ttsVolume?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      outId: 'OutId',
      sessionTimeout: 'SessionTimeout',
      startWordParam: 'StartWordParam',
      ttsSpeed: 'TtsSpeed',
      ttsVoiceCode: 'TtsVoiceCode',
      ttsVolume: 'TtsVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      calledNumber: 'string',
      callerNumber: 'string',
      outId: 'string',
      sessionTimeout: 'number',
      startWordParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttsSpeed: 'number',
      ttsVoiceCode: 'string',
      ttsVolume: 'number',
    };
  }

  validate() {
    if(this.startWordParam) {
      $dara.Model.validateMap(this.startWordParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

