// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDigitalWatermarkExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * The type of watermark extraction. Valid values:
   * 
   * - **TraceMark**: tracing watermark.
   * - **CopyrightMark**: copyright watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * TraceMark
   */
  extractType?: string;
  /**
   * @remarks
   * The video ID of the video from which you want to extract the watermark. Only a single video ID is supported. You can obtain the video ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - Call the [SearchMedia](https://help.aliyun.com/document_detail/436559.html) operation. The video ID (VideoId) is returned in the response.
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

