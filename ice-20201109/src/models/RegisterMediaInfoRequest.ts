// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the media asset. Valid values:
   * 
   * *   subtitles
   * *   watermark
   * *   opening
   * *   ending
   * *   general
   * 
   * @example
   * opening
   */
  businessType?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 3048
   */
  cateId?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The value must be a UUID that contains 32 characters.
   * 
   * @example
   * ****0311a423d11a5f7dee713535****
   */
  clientToken?: string;
  /**
   * @remarks
   * The thumbnail URL of the media asset.
   * 
   * *   The value can be up to 128 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the media asset.
   * 
   * *   The value can be up to 1,024 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * defaultDescription
   */
  description?: string;
  /**
   * @remarks
   * The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
   * 
   * *   OSS URL in one of the following formats:
   * 
   * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   * 
   * oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
   * 
   * *   URL of an ApsaraVideo VOD media asset
   * 
   * vod://\\*\\*\\*20b48fb04483915d4f2cd8ac\\*\\*\\*\\*
   * 
   * This parameter is required.
   */
  inputURL?: string;
  /**
   * @remarks
   * The tags of the media asset.
   * 
   * *   Up to 16 tags are supported.
   * *   Separate multiple tags with commas (,).
   * *   Each tag can be up to 32 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * *   image
   * *   video
   * *   audio
   * *   text
   * 
   * We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
   * <props="china">, see [File formats](https://help.aliyun.com/document_detail/466207.html).
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values:
   * 
   * \\- true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
   * 
   * \\- false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The registration configurations.
   * 
   * By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
   * 
   * By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
   * 
   * @example
   * {
   *       "NeedSprite": "false"
   * }
   */
  registerConfig?: string;
  /**
   * @remarks
   * The ID of the smart tagging template. Valid values:
   * 
   * *   S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
   * *   S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
   * *   S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
   * 
   * After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items<props="china">, see [Smart tagging](https://help.aliyun.com/zh/ims/media-ai-billing?spm=a2c4g.11186623.0.0.3147392dWwlSjL#p-k38-3rb-dug).
   * 
   * @example
   * S00000101-300080
   */
  smartTagTemplateId?: string;
  /**
   * @remarks
   * The title. If you do not specify this parameter, a default title is automatically generated based on the date.
   * 
   * *   The value can be up to 128 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * defaultTitle
   */
  title?: string;
  /**
   * @remarks
   * The user data. You can specify a custom callback URL. For more information<props="china"> ,see [Configure a callback upon editing completion](https://help.aliyun.com/document_detail/451631.html).
   * 
   * *   The value can be up to 1,024 bytes in length.
   * *   The value must be encoded in UTF-8.
   * *   The value must be in the JSON format.
   */
  userData?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * ******b4fb044839815d4f2cd8******
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      cateId: 'CateId',
      clientToken: 'ClientToken',
      coverURL: 'CoverURL',
      description: 'Description',
      inputURL: 'InputURL',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      overwrite: 'Overwrite',
      referenceId: 'ReferenceId',
      registerConfig: 'RegisterConfig',
      smartTagTemplateId: 'SmartTagTemplateId',
      title: 'Title',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      cateId: 'number',
      clientToken: 'string',
      coverURL: 'string',
      description: 'string',
      inputURL: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      overwrite: 'boolean',
      referenceId: 'string',
      registerConfig: 'string',
      smartTagTemplateId: 'string',
      title: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

