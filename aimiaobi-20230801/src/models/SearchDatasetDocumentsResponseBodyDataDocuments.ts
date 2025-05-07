// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatasetDocumentsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * 2024-12-09 17:09:40
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      sourceFrom: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

