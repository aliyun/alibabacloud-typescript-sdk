// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleCallByTtsRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number that receives voice notifications.
   * 
   * *   Number format in the Chinese mainland:
   * 
   *     *   Mobile phone number, for example, 159\\*\\*\\*\\*0000.
   *     *   Landline number, for example, 0571\\*\\*\\*\\*5678.
   * 
   * *   Number format outside the Chinese mainland: country code + phone number, for example, 85200\\*\\*\\*\\*00.
   * 
   * > 
   * 
   * *   Each request supports only one called number. For more information, see [How to use voice notifications in the Chinese mainland](https://help.aliyun.com/document_detail/150016.html) or [How to use voice verification codes in regions outside the Chinese mainland](https://help.aliyun.com/document_detail/270044.html).
   * 
   * *   Voice verification codes are sent to a called number at the following frequency: one time per minute, five times per hour, and 20 times per 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number displayed to the called party.
   * 
   * *   You do not need to specify this parameter if you use the text-to-speech (TTS) notification template or voice verification code template for outbound calls in the common mode. For more information, see [FAQ about the common outbound call mode](https://help.aliyun.com/document_detail/172104.html).
   * *   If you use the TTS notification template or voice verification code template for outbound calls in the dedicated mode, you must specify a number you purchased and only one number can be specified. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Voice Numbers** > **Real Number Management** to view the number you purchased.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The custom ID that is reserved for the caller of the operation when the request is initiated. This ID is returned to the caller in a receipt message.
   * 
   * The value is of the STRING type and must be 1 to 15 bytes in length.
   * 
   * @example
   * 225869*****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of times a voice notification is played back in a call. Valid values: 1 to 3. Default value: 3.
   * 
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The playback speed. Valid value: -500 to 500.
   * 
   * @example
   * 5
   */
  speed?: number;
  /**
   * @remarks
   * The ID of the approved TTS notification template or voice verification code template.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), and choose **Voice Messages** > **Voice Verification Codes** or choose **Voice Messages** > **Voice Notifications** to view the **template ID**.
   * 
   * > The account to which the TTS template belongs must be the same as the account that is used to call the SingleCallByTts operation.
   * 
   * This parameter is required.
   * 
   * @example
   * TTS_100****
   */
  ttsCode?: string;
  /**
   * @remarks
   * The variables in the template, in the JSON format.
   * 
   * > The variables in the template must be less than 250 characters in length. The length of each single variable is not limited. These variables do not support URLs. The variables in the verification code template support only digits and letters.
   * 
   * @example
   * {"AckNum":"123456"}
   */
  ttsParam?: string;
  /**
   * @remarks
   * The playback volume of the voice notification. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      ttsCode: 'string',
      ttsParam: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

