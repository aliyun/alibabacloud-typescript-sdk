// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainRegionDataResponseBodyValueRegionProportionData } from "./DescribeVsDomainRegionDataResponseBodyValueRegionProportionData";


export class DescribeVsDomainRegionDataResponseBodyValue extends $dara.Model {
  regionProportionData?: DescribeVsDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeVsDomainRegionDataResponseBodyValueRegionProportionData },
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

