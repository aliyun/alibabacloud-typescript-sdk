// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocClusterTaskResponseBodyDataTopics extends $dara.Model {
  docIds?: string[];
  /**
   * @example
   * 聚类主题摘要
   */
  summary?: string;
  /**
   * @example
   * 聚类主题名
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

