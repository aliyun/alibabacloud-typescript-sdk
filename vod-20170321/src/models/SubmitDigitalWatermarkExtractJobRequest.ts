// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDigitalWatermarkExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the watermark that you want to extract. Valid values:
   * 
   * *   **TraceMark**: user-tracing watermark
   * *   **CopyrightMark**: copyright watermark
   * 
   * This parameter is required.
   * 
   * @example
   * TraceMark
   */
  extractType?: string;
  /**
   * @remarks
   * The ID of the video from which you want to extract the watermark. You can specify only one ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Media Files** > **Audio/Video** to view the video ID.
   * *   Obtain the VideoId from the response to the [SearchMedia](~~SearchMedia~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0222e203cf80f9c22870a4d2c****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      extractType: 'ExtractType',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractType: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

