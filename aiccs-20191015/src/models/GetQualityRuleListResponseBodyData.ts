// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQualityRuleListResponseBodyDataQualityRuleList } from "./GetQualityRuleListResponseBodyDataQualityRuleList";


export class GetQualityRuleListResponseBodyData extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  qualityRuleList?: GetQualityRuleListResponseBodyDataQualityRuleList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityRuleList: 'QualityRuleList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityRuleList: { 'type': 'array', 'itemType': GetQualityRuleListResponseBodyDataQualityRuleList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityRuleList)) {
      $dara.Model.validateArray(this.qualityRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

