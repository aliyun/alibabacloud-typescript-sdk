// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCheckInfoResponseBodyDataCheckDetailList } from "./QueryCheckInfoResponseBodyDataCheckDetailList";


export class QueryCheckInfoResponseBodyData extends $dara.Model {
  checkDetailList?: QueryCheckInfoResponseBodyDataCheckDetailList[];
  checkResultUrl?: string;
  static names(): { [key: string]: string } {
    return {
      checkDetailList: 'CheckDetailList',
      checkResultUrl: 'CheckResultUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDetailList: { 'type': 'array', 'itemType': QueryCheckInfoResponseBodyDataCheckDetailList },
      checkResultUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkDetailList)) {
      $dara.Model.validateArray(this.checkDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

