// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatRefDocInfo } from "./ChatRefDocInfo";
import { ChatDocumentPageNum } from "./ChatDocumentPageNum";


export class ChatRefDocItem extends $dara.Model {
  /**
   * @remarks
   * Related document information.
   */
  docInfo?: ChatRefDocInfo;
  /**
   * @remarks
   * Document name. If the original file is of types like doc, it will be converted to PDF for easier document location. This file should be used for document location information.
   * 
   * @example
   * a.pdf
   */
  docName?: string;
  /**
   * @remarks
   * Document link.
   * 
   * @example
   * https://carbon-aidoc.oss-accelerate.aliyuncs.com/jobs/42dbc7-3a9e-4e18-8939-3fd2d247bd3c/document/97178d94c75941d3b932883c810c5e.pdf
   */
  docUrl?: string;
  /**
   * @remarks
   * Original document name.
   * 
   * @example
   * a.doc
   */
  originDocName?: string;
  /**
   * @remarks
   * Original document link.
   * 
   * @example
   * https://carbon-aidoc.oss-accelerate.aliyuncs.com/jobs/42dbc7-3a9e-4e18-8939-3fd2d247bd3c/document/97178d94c75941d3b932883c810c5e.doc
   */
  originDocUrl?: string;
  /**
   * @remarks
   * Page number information.
   */
  pageNum?: ChatDocumentPageNum[];
  /**
   * @remarks
   * Return file type: \\"doc\\" for document files, \\"web\\" for internet information.
   * 
   * @example
   * doc
   */
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

