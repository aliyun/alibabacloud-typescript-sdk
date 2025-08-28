// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVoiceFileAuditInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the voice file. Valid values:
   * 
   * *   **0** (default): the voice notification file.
   * *   **2**: the recording file.
   * 
   * @example
   * 0
   */
  businessType?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the voice file. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications** or **Voice File Management**, and then click the **Voice Notification Files** tab to view the **voice ID**.
   * 
   * > You can query up to 10 voice files each time. Separate the voice file names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 8501d2eb-efbb-471f-xxx8-****.wav
   */
  voiceCodes?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      voiceCodes: 'VoiceCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      voiceCodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

