// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the media asset. Valid values:
   * 
   * - subtitles
   * - font
   * - watermark
   * - opening
   * - ending
   * - general
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
   * The client token. A 32-character UUID that ensures the idempotence of the request.
   * 
   * @example
   * ****0311a423d11a5f7dee713535****
   */
  clientToken?: string;
  /**
   * @remarks
   * The cover image URL.
   * 
   * - Maximum length: 128 bytes.
   * 
   * - UTF-8 encoded.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The content description.
   * 
   * - Maximum length: 1024 bytes.
   * 
   * - UTF-8 encoded.
   * 
   * @example
   * defaultDescription
   */
  description?: string;
  /**
   * @remarks
   * The URL of the media asset to be registered in the corresponding system. Once registered, this URL cannot be changed and is attached to the IMS mediaId.
   * 
   * - OSS URL. Two formats are supported:
   *  
   * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   * 
   * oss://example-bucket/example.mp4
   *  (This format assumes by default that the OSS region is the same as the service registration area.)
   * 
   * - VOD media asset:
   * 
   * vod://\\*\\*\\*20b48fb04483915d4f2cd8ac****
   * 
   * This parameter is required.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4  or  vod://****20b48fb04483915d4f2cd8ac****
   */
  inputURL?: string;
  /**
   * @remarks
   * The tags.
   * 
   * - Maximum number of tags: 16.
   * 
   * - Separate multiple tags with commas.
   * 
   * - Maximum length of a single tag: 32 bytes.
   * 
   * - UTF-8 encoded.
   * 
   * @example
   * tag1,tag2
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media type of the media asset. Valid values:
   * 
   * - image
   * - video
   * - audio
   * - text
   * 
   * When the value is "text", the businessType must be set to "subtitles" or "font".
   * 
   * Specify this field as needed. When the InputURL field is an OSS URL, the media type can also be automatically determined based on the file name extension (only for image, video, and audio file extensions). For the mapping between file extensions and media types, see [File formats](https://help.aliyun.com/document_detail/466207.html).
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * Specifies whether to overwrite an existing registered media asset. Default value: false.
   * 
   * - true: If the inputUrl is already registered, the existing media asset is deleted and a new media asset is registered.
   * 
   * - false: If the inputUrl is already registered, the new media asset is not registered. Duplicate inputUrl values are not supported.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens (-), and underscores (_) are supported. The length must be 6 to 64 characters. The ID must be unique for each user.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The registration configuration.
   * 
   * By default, a sprite image is generated for the media asset. To disable this, set the NeedSprite field to false.
   * 
   * By default, a snapshot is generated. To disable this, set the NeedSnapshot field to false.
   * 
   * To specify the time for the cover image, configure CoverConfig, which contains the following field:
   * - StartTime: The time in seconds at which the cover image is captured from the media asset. Up to four decimal places are supported.
   * 
   * After media asset registration, to import the media asset into a custom search library, configure SearchLibName. For information about how to create and use a custom search library, see [Use a custom search library](~~2796619#dd34d8c740yj9~~).
   * 
   * @example
   * {
   * 	"NeedSprite": "false",
   * 	"CoverConfig": {
   * 		"StartTime": 1.0
   * 	},
   *        "SearchLibName": "test"
   * }
   */
  registerConfig?: string;
  /**
   * @remarks
   * The intelligent tagging template. Valid values:
   * - S00000101-300080: A system template that includes NLP content understanding.
   * - S00000103-000001: A system template that includes NLP content understanding and all [tagging capabilities](~~2804526#93b27f536airj~~).
   * - S00000103-000002: A system template that includes all [tagging capabilities](~~2804526#93b27f536airj~~) but does not include NLP content understanding.
   * 
   * For more information about tagging capabilities, see the documentation.
   * 
   * After this field is configured, an intelligent tagging analysis task is automatically initiated upon media asset registration. For billing information, see [Billing of Smart Tag Standard Edition](https://help.aliyun.com/document_detail/600262.html).
   * 
   * @example
   * S00000101-300080
   */
  smartTagTemplateId?: string;
  /**
   * @remarks
   * The title. If not provided, a default title is automatically generated based on the date.
   * 
   * - Maximum length: 128 bytes.
   * 
   * - UTF-8 encoded.
   * 
   * @example
   * defaultTitle
   */
  title?: string;
  /**
   * @remarks
   * The user data. Custom callback URL configuration is supported. For configuration instructions, see [Configure a callback upon editing completion](https://help.aliyun.com/document_detail/451631.html).
   * 
   * - Maximum length: 1024 bytes.
   * 
   * - UTF-8 encoded.
   * 
   * - Json format.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"} or{"NotifyAddress":"https://xx.xx.xxx"} or{"NotifyAddress":"ice-callback-demo"}
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

