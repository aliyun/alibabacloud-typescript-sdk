// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosMaxBurstGbpsResponseBody extends $dara.Model {
  instanceId?: string;
  maxBurstGbps?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxBurstGbps: 'MaxBurstGbps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxBurstGbps: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

