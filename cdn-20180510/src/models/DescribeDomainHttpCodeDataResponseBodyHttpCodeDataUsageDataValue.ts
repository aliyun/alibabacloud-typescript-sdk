// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData } from "./DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData";


export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $dara.Model {
  codeProportionData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      codeProportionData: 'CodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeProportionData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
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

