// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebReviewPointsResponseBodyDataComments extends $dara.Model {
  /**
   * @example
   * 来源
   */
  source?: string;
  /**
   * @example
   * 评论内容
   */
  text?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 当前评论所属的URL
   */
  url?: string;
  /**
   * @example
   * 评论用户名
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      text: 'Text',
      title: 'Title',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      text: 'string',
      title: 'string',
      url: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

