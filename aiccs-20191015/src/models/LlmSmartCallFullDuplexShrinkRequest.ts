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
   * The phone number that receives the intelligent outbound call.
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
   * The calling number.
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
   * The external ID. The value must be 1 to 15 bytes in length.
   * 
   * @example
   * out123
   */
  outId?: string;
  /**
   * @remarks
   * **SessionTimeout**  
   * The maximum call duration. The call is automatically ended when the specified duration is exceeded. Unit: seconds. Maximum value: 3600.
   * 
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * **StartWordParam**  
   * The opening greeting variable. Format: JSON. Specify the variable name and parameter, for example, `{"custom":"XXX"}`.
   * 
   * @example
   * {\\"tailnumber\\":\\"7898\\",\\"platformOrder\\":\\"\\",\\"signatory\\":\\"客户\\"}
   */
  startWordParamShrink?: string;
  /**
   * @remarks
   * The voice speed. Valid values: 0 to 100. If this parameter is not specified, the value configured in the application is used.
   * 
   * @example
   * 70
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice code from the personalized voice interface. If this parameter is not specified, the value configured in the application is used.
   * 
   * @example
   * V745A7CED
   */
  ttsVoiceCode?: string;
  /**
   * @remarks
   * The volume. Valid values: -200 to 200. If this parameter is not specified, the value configured in the application is used.
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

