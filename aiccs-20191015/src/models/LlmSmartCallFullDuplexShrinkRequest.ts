// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallFullDuplexShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **ApplicationCode**  
   * The application code.
   * 
   * This parameter is required.
   * 
   * @example
   * app123
   */
  applicationCode?: string;
  /**
   * @remarks
   * **CalledNumber**  
   * The called number that receives the intelligent outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  calledNumber?: string;
  /**
   * @remarks
   * **CallerNumber**  
   * The caller number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0987654321
   */
  callerNumber?: string;
  /**
   * @remarks
   * **OutId**  
   * The external ID. The length is 1 to 15 bytes.
   * 
   * @example
   * out123
   */
  outId?: string;
  /**
   * @remarks
   * **SessionTimeout**  
   * The maximum call duration. The call is automatically hung up after a timeout. Unit: seconds. The maximum call duration is 3,600 seconds.
   * 
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * **StartWordParam**  
   * The opening remark variables. Format: JSON. The format is opening remark variable name + parameter, such as `{"custom":"XXX"}`.
   * 
   * @example
   * {"tailnumber":"7898","platformOrder":"","signatory":"Customer"}
   */
  startWordParamShrink?: string;
  /**
   * @remarks
   * The voice speed. Valid values: 0 to 100. If you do not specify this parameter, the value configured in the application is used.
   * 
   * @example
   * 70
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice code for the personalized voice. If you do not specify this parameter, the value configured in the application is used.
   * 
   * @example
   * V745A7CED
   */
  ttsVoiceCode?: string;
  /**
   * @remarks
   * The volume. Valid values: -200 to 200. If you do not specify this parameter, the value configured in the application is used.
   * 
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
      startWordParamShrink: 'StartWordParam',
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
      startWordParamShrink: 'string',
      ttsSpeed: 'number',
      ttsVoiceCode: 'string',
      ttsVolume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

