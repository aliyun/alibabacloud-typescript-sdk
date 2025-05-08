// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion } from "./GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion";


export class GetGatewayServiceDetailResponseBodyDataVersionDetails extends $dara.Model {
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  endpointNum?: number;
  /**
   * @remarks
   * The percentage of instances.
   * 
   * @example
   * 20%
   */
  endpointNumPercent?: string;
  /**
   * @remarks
   * The service version.
   */
  serviceVersion?: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion;
  static names(): { [key: string]: string } {
    return {
      endpointNum: 'EndpointNum',
      endpointNumPercent: 'EndpointNumPercent',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointNum: 'number',
      endpointNumPercent: 'string',
      serviceVersion: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion,
    };
  }

  validate() {
    if(this.serviceVersion && typeof (this.serviceVersion as any).validate === 'function') {
      (this.serviceVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

