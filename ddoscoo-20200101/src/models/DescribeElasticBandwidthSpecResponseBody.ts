// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticBandwidthSpecResponseBody extends $dara.Model {
  elasticBandwidthSpec?: string[];
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

