// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBandwidthLimitationResponseBodyBandwidthsBandwidth } from "./DescribeBandwidthLimitationResponseBodyBandwidthsBandwidth";


export class DescribeBandwidthLimitationResponseBodyBandwidths extends $dara.Model {
  bandwidth?: DescribeBandwidthLimitationResponseBodyBandwidthsBandwidth[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: { 'type': 'array', 'itemType': DescribeBandwidthLimitationResponseBodyBandwidthsBandwidth },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidth)) {
      $dara.Model.validateArray(this.bandwidth);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

