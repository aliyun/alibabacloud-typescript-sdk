// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIImageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the pipeline that is used for the AI processing job.
   * 
   * >  This parameter is optional if you specify a default pipeline ID. If you want to use a separate pipeline to submit multiple AI processing jobs., submit a ticket or contact Alibaba Cloud after-sales engineers. For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * 
   * @example
   * 6492025b8f*****6ba5bb755a33438
   */
  AIPipelineId?: string;
  /**
   * @remarks
   * The ID of the AI template. You can use one of the following methods to obtain the ID:
   * 
   * *   Obtain the value of TemplateId from the response to the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) that you call to create the template.
   * *   Obtain the value of TemplateId from the response to the [ListAITemplate](https://help.aliyun.com/document_detail/102936.html) operation after you create the template.
   * 
   * This parameter is required.
   * 
   * @example
   * ef1a8842cb9f*****cea80cad902e416
   */
  AITemplateId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The user data.
   * 
   * *   The value must be a JSON string.
   * *   You must specify the MessageCallback or Extend parameter.
   * *   The value can contain a maximum of 512 bytes.
   * 
   * For more information, see the "UserData: specifies the custom configurations for media upload" section of the [Request parameters](https://help.aliyun.com/document_detail/86952.html) topic.
   * 
   * @example
   * {"Extend":{"localId":"****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the video. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD](https://vod.console.aliyun.com) console. In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the video file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you call to upload the video.
   * *   Obtain the value of VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation after you upload the video.
   * 
   * This parameter is required.
   * 
   * @example
   * 357a8748c5774*****89d2726e6436aa
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AIPipelineId: 'AIPipelineId',
      AITemplateId: 'AITemplateId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIPipelineId: 'string',
      AITemplateId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

