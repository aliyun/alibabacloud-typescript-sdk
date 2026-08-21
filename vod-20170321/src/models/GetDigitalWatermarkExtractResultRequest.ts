// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDigitalWatermarkExtractResultRequest extends $dara.Model {
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
   * The ID of the watermark extraction job.
   * - The job ID is returned after you call the [SubmitDigitalWatermarkExtractJob](~~SubmitDigitalWatermarkExtractJob~~) operation.
   * - If you specify this parameter, the result of the specified watermark extraction job is returned. If you do not specify this parameter, the results of all historical watermark extraction jobs for the video are returned.
   * 
   * @example
   * 2bf4390af9e5491c09cc720ad****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the video to query. Only a single video ID is supported. You can obtain the video ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - Call the [SearchMedia](~~SearchMedia~~) operation. The video ID (VideoId) is returned in the response.
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

