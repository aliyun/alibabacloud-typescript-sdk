// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotTopicSummariesResponseBodyDataNewsComments } from "./ListHotTopicSummariesResponseBodyDataNewsComments";


export class ListHotTopicSummariesResponseBodyDataNews extends $dara.Model {
  comments?: ListHotTopicSummariesResponseBodyDataNewsComments[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * 2024-09-10 15:32:00
   */
  pubTime?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'comments',
      content: 'content',
      pubTime: 'pubTime',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataNewsComments },
      content: 'string',
      pubTime: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

