// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatRefDocPageInfo } from "./ChatRefDocPageInfo";


export class ChatRefDocInfo extends $dara.Model {
  /**
   * @remarks
   * Detailed information for each page of the document.
   */
  pageListInfo?: ChatRefDocPageInfo[];
  /**
   * @remarks
   * Total number of pages in the current document.
   * 
   * @example
   * 23
   */
  pages?: number;
  static names(): { [key: string]: string } {
    return {
      pageListInfo: 'pageListInfo',
      pages: 'pages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageListInfo: { 'type': 'array', 'itemType': ChatRefDocPageInfo },
      pages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageListInfo)) {
      $dara.Model.validateArray(this.pageListInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

