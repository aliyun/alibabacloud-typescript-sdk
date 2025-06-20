// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckResponseBodyDataRuleDetailUrlList } from "./ChangeCheckResponseBodyDataRuleDetailUrlList";


export class ChangeCheckResponseBodyData extends $dara.Model {
  approveResultUrl?: string;
  bgCheckStatus?: string;
  bgVid?: string;
  changeStatus?: string;
  checkResultUrl?: string;
  checkStatus?: string;
  checkholdReason?: string[];
  ruleDetailUrlList?: ChangeCheckResponseBodyDataRuleDetailUrlList[];
  sourceOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      approveResultUrl: 'ApproveResultUrl',
      bgCheckStatus: 'BgCheckStatus',
      bgVid: 'BgVid',
      changeStatus: 'ChangeStatus',
      checkResultUrl: 'CheckResultUrl',
      checkStatus: 'CheckStatus',
      checkholdReason: 'CheckholdReason',
      ruleDetailUrlList: 'RuleDetailUrlList',
      sourceOrderId: 'SourceOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveResultUrl: 'string',
      bgCheckStatus: 'string',
      bgVid: 'string',
      changeStatus: 'string',
      checkResultUrl: 'string',
      checkStatus: 'string',
      checkholdReason: { 'type': 'array', 'itemType': 'string' },
      ruleDetailUrlList: { 'type': 'array', 'itemType': ChangeCheckResponseBodyDataRuleDetailUrlList },
      sourceOrderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkholdReason)) {
      $dara.Model.validateArray(this.checkholdReason);
    }
    if(Array.isArray(this.ruleDetailUrlList)) {
      $dara.Model.validateArray(this.ruleDetailUrlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

