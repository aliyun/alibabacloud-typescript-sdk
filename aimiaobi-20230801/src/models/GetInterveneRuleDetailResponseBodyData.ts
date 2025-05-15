// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail } from "./GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail";


export class GetInterveneRuleDetailResponseBodyData extends $dara.Model {
  code?: number;
  interveneRuleDetail?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      interveneRuleDetail: 'InterveneRuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      interveneRuleDetail: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail,
    };
  }

  validate() {
    if(this.interveneRuleDetail && typeof (this.interveneRuleDetail as any).validate === 'function') {
      (this.interveneRuleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

