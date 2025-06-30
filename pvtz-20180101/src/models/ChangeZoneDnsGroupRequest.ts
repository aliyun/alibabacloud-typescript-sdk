// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeZoneDnsGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 85456erer657cfgfg3437
   */
  clientToken?: string;
  /**
   * @remarks
   * The logical location of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   Normal zone: regular module
   * *   Fast Zone: acceleration module
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

