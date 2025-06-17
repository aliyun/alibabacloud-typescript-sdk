// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval } from "./DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval";


export class DescribeDomainBpsDataByLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned at each time interval.
   */
  bpsDataInterval?: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval;
  /**
   * @remarks
   * The time interval between the data entries. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C565B910-BC3B-467B-9046-2A48566EA967
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataInterval: 'BpsDataInterval',
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataInterval: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval,
      dataInterval: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.bpsDataInterval && typeof (this.bpsDataInterval as any).validate === 'function') {
      (this.bpsDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

