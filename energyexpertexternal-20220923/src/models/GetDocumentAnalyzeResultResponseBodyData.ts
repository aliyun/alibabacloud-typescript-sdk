// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentAnalyzeResultResponseBodyDataKvListInfo } from "./GetDocumentAnalyzeResultResponseBodyDataKvListInfo";


export class GetDocumentAnalyzeResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Document Parsing Result
   */
  kvListInfo?: GetDocumentAnalyzeResultResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': GetDocumentAnalyzeResultResponseBodyDataKvListInfo },
    };
  }

  validate() {
    if(Array.isArray(this.kvListInfo)) {
      $dara.Model.validateArray(this.kvListInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

