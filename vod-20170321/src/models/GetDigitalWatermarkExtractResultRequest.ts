// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDigitalWatermarkExtractResultRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the watermark. Valid values:
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
   * The ID of the watermark extraction job.
   * 
   * *   You can obtain the ID from the response to the [SubmitDigitalWatermarkExtractJob](~~SubmitDigitalWatermarkExtractJob~~) operation.
   * *   If you specify this parameter, the result of the specified watermark extraction job is returned. If you leave this parameter empty, the results of all watermark extraction jobs submitted for the video are returned.
   * 
   * @example
   * 2bf4390af9e5491c09cc720ad****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the video from which you want to query the watermark content. You can specify only one ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Media Files** > **Audio/Video** to view the video ID.
   * *   Obtain the VideoId from the response to the [SearchMedia](~~SearchMedia~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f54b6e91d24d81d4****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      extractType: 'ExtractType',
      jobId: 'JobId',
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
      jobId: 'string',
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

