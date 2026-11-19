// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIImageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The AI task pipeline ID.
   * 
   * > A default ID is provided and this parameter is optional. If you need to import data in batches, you must use a separate task pipeline. Submit a ticket to apply for the configuration or contact Alibaba Cloud after-sales support. For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * 
   * @example
   * 6492025b8f*****6ba5bb755a33438
   */
  AIPipelineId?: string;
  /**
   * @remarks
   * The AI image template ID. You can obtain the template ID by using one of the following methods:
   * - When you create an image template by calling the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation, the template ID is the value of the TemplateId response parameter.
   * - After a template is created, you can call the [ListAITemplate](https://help.aliyun.com/document_detail/102936.html) operation to query the AI image template ID. The template ID is the value of the TemplateId response parameter.
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
   * The custom settings.
   * - The value must be a JSON string.
   * - The value must contain the MessageCallback or Extend parameter.
   * - The maximum length is 512 bytes.
   * 
   * For more information about how to construct the parameter, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {"Extend":{"localId":"****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Assets** > **Audio/Video** to view the video ID.
   * - When you upload a video by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the video ID is the value of the VideoId response parameter.
   * - After a video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID. The video ID is the value of the VideoId response parameter.
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

