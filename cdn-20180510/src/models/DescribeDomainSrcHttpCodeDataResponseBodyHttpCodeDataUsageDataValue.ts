// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData } from "./DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData";


export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $dara.Model {
  codeProportionData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      codeProportionData: 'CodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeProportionData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.codeProportionData)) {
      $dara.Model.validateArray(this.codeProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

