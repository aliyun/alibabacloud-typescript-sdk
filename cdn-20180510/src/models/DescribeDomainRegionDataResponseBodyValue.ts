// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRegionDataResponseBodyValueRegionProportionData } from "./DescribeDomainRegionDataResponseBodyValueRegionProportionData";


export class DescribeDomainRegionDataResponseBodyValue extends $dara.Model {
  regionProportionData?: DescribeDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.regionProportionData)) {
      $dara.Model.validateArray(this.regionProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

