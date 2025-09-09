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
   * PrivateLink
   */
  privateVpcConnectionMode?: string;
  /**
   * @example
   * service-55fc2eabbce647fa976b
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
   * 1
   */
  serviceVersion?: string;
  /**
   * @example
   * cn-hangzhou-i
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

