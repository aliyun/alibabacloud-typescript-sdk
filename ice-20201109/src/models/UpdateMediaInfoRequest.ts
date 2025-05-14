// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to append tags. Default value: false. Valid values:
   * 
   * *   true: updates the MediaTags parameter by appending new tags.
   * *   false: updates the MediaTags parameter by overwriting existing tags with new tags.
   * 
   * @example
   * true
   */
  appendTags?: boolean;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * *   subtitles
   * *   watermark
   * *   opening
   * *   ending
   * *   general
   * 
   * @example
   * video
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
   * The category.
   * 
   * *   The value can be up to 64 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * defaultCategory
   */
  category?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
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
   * The content description.
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
   * The input URL of the media asset in another service. The URL must be bound to the ID of the media asset in IMS. The URL cannot be modified once registered.
   * 
   * For a media asset from Object Storage Service (OSS), the URL may have one of the following formats:
   * 
   * 1\\. http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   * 
   * 2\\. oss://example-bucket/example.mp4. This format indicates that the region in which the OSS bucket of the media asset resides is the same as the region in which OSS is activated.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset. If this parameter is left empty, you must specify the input URL of the media asset, which has been registered in the IMS content library.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * *   Up to 16 tags are supported.
   * *   Separate multiple tags with commas (,).
   * *   Each tag can be up to 32 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * updateTags1,updateTags2
   */
  mediaTags?: string;
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
   * The title.
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
   * The user data. It can be up to 1,024 bytes in size.
   * 
   * @example
   * userData
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appendTags: 'AppendTags',
      businessType: 'BusinessType',
      cateId: 'CateId',
      category: 'Category',
      coverURL: 'CoverURL',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      referenceId: 'ReferenceId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendTags: 'boolean',
      businessType: 'string',
      cateId: 'number',
      category: 'string',
      coverURL: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      referenceId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

