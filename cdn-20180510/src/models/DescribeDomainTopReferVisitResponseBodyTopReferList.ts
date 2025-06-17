// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopReferVisitResponseBodyTopReferListReferList } from "./DescribeDomainTopReferVisitResponseBodyTopReferListReferList";


export class DescribeDomainTopReferVisitResponseBodyTopReferList extends $dara.Model {
  referList?: DescribeDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeDomainTopReferVisitResponseBodyTopReferListReferList },
    };
  }

  validate() {
    if(Array.isArray(this.referList)) {
      $dara.Model.validateArray(this.referList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

