// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainISPDataResponseBodyValueISPProportionData } from "./DescribeDomainIspdataResponseBodyValueIspproportionData";


export class DescribeDomainISPDataResponseBodyValue extends $dara.Model {
  ISPProportionData?: DescribeDomainISPDataResponseBodyValueISPProportionData[];
  static names(): { [key: string]: string } {
    return {
      ISPProportionData: 'ISPProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ISPProportionData: { 'type': 'array', 'itemType': DescribeDomainISPDataResponseBodyValueISPProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.ISPProportionData)) {
      $dara.Model.validateArray(this.ISPProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

