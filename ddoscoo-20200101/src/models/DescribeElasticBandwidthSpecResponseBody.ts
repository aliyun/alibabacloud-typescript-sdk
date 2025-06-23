// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticBandwidthSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the available burstable protection bandwidths. Unit: Gbit/s.
   */
  elasticBandwidthSpec?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBandwidthSpec: 'ElasticBandwidthSpec',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBandwidthSpec: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticBandwidthSpec)) {
      $dara.Model.validateArray(this.elasticBandwidthSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

