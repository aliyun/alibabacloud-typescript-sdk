// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the service is a trial service.
   * 
   * @example
   * true
   */
  isPoc?: boolean;
  /**
   * @remarks
   * The region of the virtual Internet.
   * 
   * @example
   * cn-hangzhou
   */
  networkRegionId?: string;
  /**
   * @remarks
   * The connection mode. Valid values: \\`PrivateLink\\` and \\`OverlayLink\\`. \\`OverlayLink\\` is an overlay link that is based on Application-aware Network Service Mesh (ANSM).
   * 
   * @example
   * VirtualInternet
   */
  privateVpcConnectionMode?: string;
  /**
   * @remarks
   * The service ID. This parameter is used with the \\`IsPoc\\` parameter when \\`IsPoc\\` is set to \\`true\\`.
   * 
   * @example
   * service-63b8a060e9d54cxxxxxx
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
   * The region where the service is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The service version. This parameter is used with the \\`IsPoc\\` parameter when \\`IsPoc\\` is set to \\`true\\`.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The zone where the service is deployed.
   * 
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

