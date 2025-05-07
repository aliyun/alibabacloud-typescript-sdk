// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesNews extends $dara.Model {
  content?: string;
  createTime?: string;
  /**
   * @example
   * 9957175DEDCF49C5ACF7A956B4FD67B2
   */
  docId?: string;
  /**
   * @example
   * 123456
   */
  docUuid?: string;
  /**
   * @example
   * https://www.example.com/aaa.png
   */
  imageUrls?: string[];
  pubTime?: string;
  source?: string;
  summary?: string;
  /**
   * @example
   * ["标签1","标签2"]
   */
  tags?: string[];
  title?: string;
  /**
   * @example
   * 文章主题
   */
  topic?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      docId: 'DocId',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      topic: 'Topic',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      docId: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      topic: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

