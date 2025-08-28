// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IvrCallRequestMenuKeyMap extends $dara.Model {
  /**
   * @remarks
   * The voice that corresponds to the key specified by the **MenuKeyMap.N.Key** parameter.
   * 
   * *   If you use a voice notification file, this parameter specifies the voice ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **Voice Notification Files** tab to view the voice ID.
   * *   If you use a TTS template, this parameter specifies the template ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **TTS Template** tab to view the template ID.
   * 
   * @example
   * TTS_1235****
   */
  code?: string;
  /**
   * @remarks
   * The key that can be pressed by the subscriber.
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The variables in the TTS template, in the JSON format.
   * 
   * > 
   * 
   * *   This parameter specifies the substitution relationship of the variables in the TTS template if the value of the **MenuKeyMap.N.Code** parameter is set to the ID of the TTS template.
   * 
   * *   This parameter is required if the value of the **MenuKeyMap.N.Code** parameter is set to the ID of a TTS template that contains variables.
   * 
   * @example
   * {"name":"xxx","code":"123"}
   */
  ttsParams?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      key: 'Key',
      ttsParams: 'TtsParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      key: 'string',
      ttsParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallRequest extends $dara.Model {
  /**
   * @remarks
   * The end voice.
   * 
   * *   If you use a voice notification file, this parameter specifies the voice ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **Voice Notification Files** tab to view the voice ID.
   * *   If you use a TTS template, this parameter specifies the template ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **TTS Template** tab to view the template ID.
   * 
   * > The value of the ByeCode parameter must be of the same type as the value of the StartCode parameter. This means that both parameters must specify voice IDs or TTS template IDs.
   * 
   * @example
   * TTS_1234****
   */
  byeCode?: string;
  /**
   * @remarks
   * The variables in the TTS template, in the JSON format.
   * 
   * > This parameter is required when the ByeCode parameter is set to the ID of a TTS template that contains variables.
   * 
   * @example
   * {"name":"xxx","code":"123"}
   */
  byeTtsParams?: string;
  /**
   * @remarks
   * The called number.
   * 
   * Only phone numbers in the Chinese mainland are supported. Each request supports only one called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * The value must be a number you purchased. Each request supports only one calling number. In most cases, a calling number is configured with the maximum number of concurrent requests. New requests fail if the maximum number of concurrent requests is reached. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Real Number Service > Real Number Management** to view the number you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The information about the key pressed by the subscriber.
   */
  menuKeyMap?: IvrCallRequestMenuKeyMap[];
  /**
   * @remarks
   * The ID that is reserved for the caller of the operation. This ID is returned to the caller in a receipt message.
   * 
   * The value is of the STRING type and must be 1 to 15 bytes in length.
   * 
   * @example
   * PR0210428****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of replay times. Valid values: 1 to 3.
   * 
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The voice that is played when the call begins.
   * 
   * *   If you use a voice notification file, this parameter specifies the voice ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > Voice Notifications, and then click the **Voice Notification Files** tab to view the voice ID.
   * *   If you use a text-to-speech (TTS) template, this parameter specifies the template ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **TTS Template** tab to view the template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TTS_1234****
   */
  startCode?: string;
  /**
   * @remarks
   * The variables in the TTS template, in the JSON format.
   * 
   * > This parameter is required when the StartCode parameter is set to the ID of a TTS template that contains variables.
   * 
   * @example
   * {"name":"xxx","code":"123"}
   */
  startTtsParams?: string;
  /**
   * @remarks
   * The timeout period for the subscriber to press a key. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      byeCode: 'ByeCode',
      byeTtsParams: 'ByeTtsParams',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      menuKeyMap: 'MenuKeyMap',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startCode: 'StartCode',
      startTtsParams: 'StartTtsParams',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byeCode: 'string',
      byeTtsParams: 'string',
      calledNumber: 'string',
      calledShowNumber: 'string',
      menuKeyMap: { 'type': 'array', 'itemType': IvrCallRequestMenuKeyMap },
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startCode: 'string',
      startTtsParams: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.menuKeyMap)) {
      $dara.Model.validateArray(this.menuKeyMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

