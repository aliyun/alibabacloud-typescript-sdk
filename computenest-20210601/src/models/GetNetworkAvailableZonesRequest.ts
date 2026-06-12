// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the service is a trial.
   * 
   * @example
   * true
   */
  isPoc?: boolean;
  /**
   * @remarks
   * The region of the virtual network.
   * 
   * @example
   * cn-hangzhou
   */
  networkRegionId?: string;
  /**
   * @remarks
   * The connection mode. Valid values: \\`PrivateLink\\` and \\`OverlayLink\\`. \\`OverlayLink\\` is an overlay link based on Application-aware Network Service Mesh (ANSM).
   * 
   * @example
   * PrivateLink
   */
  privateVpcConnectionMode?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-55fc2eabbce647fa976b
   */
  serviceId?: string;
  /**
   * @remarks
   * The direction of the internal-facing access. Valid values: \\`Forward\\` and \\`Reverse\\`.
   * 
   * @example
   * Forward
   */
  serviceInstanceEndpointServiceType?: string;
  /**
   * @remarks
   * The ID of the region where the service is located.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The zone for the service deployment.
   * 
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

