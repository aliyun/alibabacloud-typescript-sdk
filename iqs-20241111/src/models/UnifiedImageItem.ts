// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedImageItem extends $dara.Model {
  /**
   * @remarks
   * Height
   * 
   * @example
   * 1330
   */
  height?: number;
  /**
   * @remarks
   * URL of the web page to which the image belongs
   * 
   * @example
   * http://mbd.baidu.com/newspage/data/dtlandingsuper?nid=dt_4541580238898912926
   */
  hostPageUrl?: string;
  /**
   * @remarks
   * Image URL
   * 
   * @example
   * http://pic.rmb.bdstatic.com/bjh/bb87f566c0c/241218/f7936f25837b20211e5ef88d7980c143.jpeg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Web page published time, in ISO time format
   * 
   * @example
   * 2022-07-05T00:54:42+08:00
   */
  publishedTime?: string;
  /**
   * @remarks
   * Image title
   * 
   * @example
   * 阿里巴巴现在以主业上为主,以电商为主,以能够盈利的业务为主
   */
  title?: string;
  /**
   * @remarks
   * Image width
   * 
   * @example
   * 1000
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      hostPageUrl: 'hostPageUrl',
      imageUrl: 'imageUrl',
      publishedTime: 'publishedTime',
      title: 'title',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      hostPageUrl: 'string',
      imageUrl: 'string',
      publishedTime: 'string',
      title: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

