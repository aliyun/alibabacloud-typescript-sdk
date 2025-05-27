// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPageSmartShortUrlLogResponseBodyModelList extends $dara.Model {
  /**
   * @example
   * 87
   */
  clickState?: number;
  /**
   * @example
   * 51
   */
  clickTime?: number;
  /**
   * @example
   * 64
   */
  createTime?: number;
  /**
   * @example
   * 示例值示例值
   */
  phoneNumber?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  shortName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clickState: 'ClickState',
      clickTime: 'ClickTime',
      createTime: 'CreateTime',
      phoneNumber: 'PhoneNumber',
      shortName: 'ShortName',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickState: 'number',
      clickTime: 'number',
      createTime: 'number',
      phoneNumber: 'string',
      shortName: 'string',
      shortUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

