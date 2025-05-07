// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatasetDocumentsResponseBodyDataMultimodalMedias } from "./ListDatasetDocumentsResponseBodyDataMultimodalMedias";


export class ListDatasetDocumentsResponseBodyData extends $dara.Model {
  /**
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @example
   * xx
   */
  extend3?: string;
  multimodalMedias?: ListDatasetDocumentsResponseBodyDataMultimodalMedias[];
  /**
   * @example
   * 2022-01-01 00:00:00
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 100
   */
  status?: number;
  /**
   * @example
   * xx
   */
  summary?: string;
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
   * https://xxx/xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      status: 'Status',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      content: 'string',
      disableHandleMultimodalMedia: 'boolean',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': ListDatasetDocumentsResponseBodyDataMultimodalMedias },
      pubTime: 'string',
      sourceFrom: 'string',
      status: 'number',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

