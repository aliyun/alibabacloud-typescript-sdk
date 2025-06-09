// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCollectionPoliciesResponseBodyStatisticsPolicySourceList } from "./ListCollectionPoliciesResponseBodyStatisticsPolicySourceList";


export class ListCollectionPoliciesResponseBodyStatistics extends $dara.Model {
  policySourceList?: ListCollectionPoliciesResponseBodyStatisticsPolicySourceList[];
  /**
   * @example
   * oss
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      policySourceList: 'policySourceList',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policySourceList: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyStatisticsPolicySourceList },
      productCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policySourceList)) {
      $dara.Model.validateArray(this.policySourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

