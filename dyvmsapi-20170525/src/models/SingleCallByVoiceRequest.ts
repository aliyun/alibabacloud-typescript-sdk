// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleCallByVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The number for receiving voice notifications.
   * 
   * Number format:
   * 
   * *   In the Chinese mainland:
   * 
   *     *   Mobile phone number, for example, 159\\*\\*\\*\\*0000.
   *     *   Landline number, for example, 0571\\*\\*\\*\\*5678.
   * 
   * *   Outside the Chinese mainland: country code + phone number, for example, 85200\\*\\*\\*\\*00.
   * 
   * > 
   * 
   * *   You can specify only one called number for a request. For more information, see [How to use voice notifications in the Chinese mainland](https://help.aliyun.com/document_detail/150016.html) or [How to use voice notifications in regions outside the Chinese mainland](https://help.aliyun.com/document_detail/268810.html).
   * 
   * *   Voice notifications are sent to a called number at the following frequency: one time per minute, five times per hour, and 20 times per 24 hours.
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
   * *   You do not need to specify this parameter if you use a voice notification file that uses the common outbound call mode. For more information, see [FAQ about the common outbound call mode](https://help.aliyun.com/document_detail/172104.html).
   * *   If you use a voice notification file that uses the dedicated outbound call mode, you must specify a number that you purchased. You can specify only one number. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Real Number Service** > **Real Number Management** to view the number that you purchased.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in a receipt message.
   * 
   * The value must be of the STRING type and 1 to 15 bytes in length.
   * 
   * @example
   * 22596****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of times the voice notification file is played. Valid values: 1 to 3.
   * 
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The playback speed of the voice notification file. Valid values: -500 to 500.
   * 
   * @example
   * 100
   */
  speed?: number;
  /**
   * @remarks
   * The voice ID of the voice notification file.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications** or **Voice File Management**, and then click the **Voice Notification Files** tab to view the **voice ID**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  voiceCode?: string;
  /**
   * @remarks
   * The playback volume of the voice notification file. Valid values: 0 to 100. Default value: 100.
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
      voiceCode: 'VoiceCode',
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
      voiceCode: 'string',
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

