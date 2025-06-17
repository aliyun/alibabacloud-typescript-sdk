// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel } from "./DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel";


export class DescribeDomainRealTimeQpsDataResponseBodyData extends $dara.Model {
  qpsModel?: DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel[];
  static names(): { [key: string]: string } {
    return {
      qpsModel: 'QpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qpsModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel },
    };
  }

  validate() {
    if(Array.isArray(this.qpsModel)) {
      $dara.Model.validateArray(this.qpsModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

