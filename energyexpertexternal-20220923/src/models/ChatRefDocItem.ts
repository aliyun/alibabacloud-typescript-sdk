// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatRefDocInfo } from "./ChatRefDocInfo";
import { ChatDocumentPageNum } from "./ChatDocumentPageNum";


export class ChatRefDocItem extends $dara.Model {
  docInfo?: ChatRefDocInfo;
  docName?: string;
  docUrl?: string;
  originDocName?: string;
  originDocUrl?: string;
  pageNum?: ChatDocumentPageNum[];
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      docInfo: 'docInfo',
      docName: 'docName',
      docUrl: 'docUrl',
      originDocName: 'originDocName',
      originDocUrl: 'originDocUrl',
      pageNum: 'pageNum',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docInfo: ChatRefDocInfo,
      docName: 'string',
      docUrl: 'string',
      originDocName: 'string',
      originDocUrl: 'string',
      pageNum: { 'type': 'array', 'itemType': ChatDocumentPageNum },
      sourceType: 'string',
    };
  }

  validate() {
    if(this.docInfo && typeof (this.docInfo as any).validate === 'function') {
      (this.docInfo as any).validate();
    }
    if(Array.isArray(this.pageNum)) {
      $dara.Model.validateArray(this.pageNum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

