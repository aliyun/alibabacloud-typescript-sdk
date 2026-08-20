// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeZoneDnsGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. Generate a unique value for this parameter on your client. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 85456erer657cfgfg3437
   */
  clientToken?: string;
  /**
   * @remarks
   * The built-in authoritative DNS group.
   * 
   * - Standard zone group: NORMAL_ZONE
   * 
   * - Acceleration zone group: FAST_ZONE
   * 
   * <props="china">
   * 
   * > Starting from April 30, 2025 (UTC+8), when new users of Alibaba Cloud DNS PrivateZone create a zone, the zone is set to an acceleration zone by default.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * The global ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * e0cff188756b1d4579b25e54b66cb830
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dnsGroup: 'DnsGroup',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dnsGroup: 'string',
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

