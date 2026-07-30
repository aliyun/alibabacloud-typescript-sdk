// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to update the Tags field in append mode.
   */
  appendTags?: boolean;
  categoryId?: number;
  /**
   * @remarks
   * The cover image URL. This parameter is valid only for video media assets.
   * 
   * @example
   * https://bullet-time-20240910.oss-cn-shanghai.aliyuncs.com/ice-generated/a97255309a7c71f093d3e7f6d75a6302/snapshots/normal/2a4030b1950443048f3e3f81489d57eb-00001.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The dynamic metadata.
   * 
   * @example
   * {}
   */
  dynamicMetaData?: string;
  /**
   * @remarks
   * The media type of the media asset.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags. Separate multiple tags with commas.
   * 
   * @example
   * CapCut animation.
   */
  mediaTags?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The user data. The maximum length is 1024 bytes.
   * 
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appendTags: 'AppendTags',
      categoryId: 'CategoryId',
      coverURL: 'CoverURL',
      description: 'Description',
      dynamicMetaData: 'DynamicMetaData',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendTags: 'boolean',
      categoryId: 'number',
      coverURL: 'string',
      description: 'string',
      dynamicMetaData: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
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

