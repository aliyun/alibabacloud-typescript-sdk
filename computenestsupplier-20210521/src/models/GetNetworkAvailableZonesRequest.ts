// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkAvailableZonesRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  isPoc?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  networkRegionId?: string;
  /**
   * @example
   * VirtualInternet
   */
  privateVpcConnectionMode?: string;
  /**
   * @example
   * service-63b8a060e9d54cxxxxxx
   */
  serviceId?: string;
  /**
   * @example
   * Forward
   */
  serviceInstanceEndpointServiceType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      isPoc: 'IsPoc',
      networkRegionId: 'NetworkRegionId',
      privateVpcConnectionMode: 'PrivateVpcConnectionMode',
      serviceId: 'ServiceId',
      serviceInstanceEndpointServiceType: 'ServiceInstanceEndpointServiceType',
      serviceRegionId: 'ServiceRegionId',
      serviceVersion: 'ServiceVersion',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPoc: 'boolean',
      networkRegionId: 'string',
      privateVpcConnectionMode: 'string',
      serviceId: 'string',
      serviceInstanceEndpointServiceType: 'string',
      serviceRegionId: 'string',
      serviceVersion: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

