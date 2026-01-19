// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosMaxBurstGbpsResponseBody extends $dara.Model {
  /**
   * @example
   * esa-site-a71k7bw19dz4
   */
  instanceId?: string;
  /**
   * @example
   * 300
   */
  maxBurstGbps?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B5D71671-B074-5702-A0F5-B923920FDDD4
   */
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

