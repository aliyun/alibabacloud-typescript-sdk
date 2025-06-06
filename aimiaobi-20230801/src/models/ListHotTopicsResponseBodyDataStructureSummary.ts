// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotTopicsResponseBodyDataStructureSummaryDocList } from "./ListHotTopicsResponseBodyDataStructureSummaryDocList";


export class ListHotTopicsResponseBodyDataStructureSummary extends $dara.Model {
  docList?: ListHotTopicsResponseBodyDataStructureSummaryDocList[];
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docList: 'DocList',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docList: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyDataStructureSummaryDocList },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docList)) {
      $dara.Model.validateArray(this.docList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

