// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCheckInfoResponseBodyDataCheckDetailListBlockRule } from "./QueryCheckInfoResponseBodyDataCheckDetailListBlockRule";


export class QueryCheckInfoResponseBodyDataCheckDetailList extends $dara.Model {
  blockRule?: QueryCheckInfoResponseBodyDataCheckDetailListBlockRule[];
  checkholdReason?: string;
  desc?: string;
  picInfo?: string;
  riskExplain?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      blockRule: 'BlockRule',
      checkholdReason: 'CheckholdReason',
      desc: 'Desc',
      picInfo: 'PicInfo',
      riskExplain: 'RiskExplain',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRule: { 'type': 'array', 'itemType': QueryCheckInfoResponseBodyDataCheckDetailListBlockRule },
      checkholdReason: 'string',
      desc: 'string',
      picInfo: 'string',
      riskExplain: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockRule)) {
      $dara.Model.validateArray(this.blockRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

