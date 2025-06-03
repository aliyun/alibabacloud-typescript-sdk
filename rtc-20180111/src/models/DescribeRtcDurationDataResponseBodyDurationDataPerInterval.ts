// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule } from "./DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule";


export class DescribeRtcDurationDataResponseBodyDurationDataPerInterval extends $dara.Model {
  durationModule?: DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule[];
  static names(): { [key: string]: string } {
    return {
      durationModule: 'DurationModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationModule: { 'type': 'array', 'itemType': DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule },
    };
  }

  validate() {
    if(Array.isArray(this.durationModule)) {
      $dara.Model.validateArray(this.durationModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

