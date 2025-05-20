// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatRefDocPageInfo } from "./ChatRefDocPageInfo";


export class ChatRefDocInfo extends $dara.Model {
  pageListInfo?: ChatRefDocPageInfo[];
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

