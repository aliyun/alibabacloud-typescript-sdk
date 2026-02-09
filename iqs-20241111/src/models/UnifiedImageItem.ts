// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedImageItem extends $dara.Model {
  /**
   * @example
   * 1330
   */
  height?: number;
  /**
   * @example
   * http://mbd.baidu.com/newspage/data/dtlandingsuper?nid=dt_4541580238898912926
   */
  hostPageUrl?: string;
  /**
   * @example
   * http://pic.rmb.bdstatic.com/bjh/bb87f566c0c/241218/f7936f25837b20211e5ef88d7980c143.jpeg
   */
  imageUrl?: string;
  /**
   * @example
   * 2022-07-05T00:54:42+08:00
   */
  publishedTime?: string;
  title?: string;
  /**
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

