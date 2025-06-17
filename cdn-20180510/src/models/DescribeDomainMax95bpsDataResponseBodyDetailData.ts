// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainMax95BpsDataResponseBodyDetailDataMax95Detail } from "./DescribeDomainMax95bpsDataResponseBodyDetailDataMax95detail";


export class DescribeDomainMax95BpsDataResponseBodyDetailData extends $dara.Model {
  max95Detail?: DescribeDomainMax95BpsDataResponseBodyDetailDataMax95Detail[];
  static names(): { [key: string]: string } {
    return {
      max95Detail: 'Max95Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max95Detail: { 'type': 'array', 'itemType': DescribeDomainMax95BpsDataResponseBodyDetailDataMax95Detail },
    };
  }

  validate() {
    if(Array.isArray(this.max95Detail)) {
      $dara.Model.validateArray(this.max95Detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

