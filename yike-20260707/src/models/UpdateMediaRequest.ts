// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaRequest extends $dara.Model {
  appendTags?: boolean;
  categoryId?: number;
  /**
   * @example
   * https://bullet-time-20240910.oss-cn-shanghai.aliyuncs.com/ice-generated/a97255309a7c71f093d3e7f6d75a6302/snapshots/normal/2a4030b1950443048f3e3f81489d57eb-00001.jpg
   */
  coverURL?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * {}
   */
  dynamicMetaData?: string;
  /**
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @example
   * 剪映动画
   */
  mediaTags?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
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

