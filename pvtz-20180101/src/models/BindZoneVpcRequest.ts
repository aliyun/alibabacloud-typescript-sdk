// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindZoneVpcRequestVpcs extends $dara.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The VPC ID. If the zone is already associated with VPCs and you do not specify this parameter, the associated VPCs are disassociated from the zone.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   **STANDARD**: standard VPC
   * *   **EDS**: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The VPCs.
   * 
   * >  If Vpcs is left empty, all VPCs that are associated with the zone are disassociated from the zone.
   */
  vpcs?: BindZoneVpcRequestVpcs[];
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 34d4031b63c527358b710a61346a****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      vpcs: 'Vpcs',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      userClientIp: 'string',
      vpcs: { 'type': 'array', 'itemType': BindZoneVpcRequestVpcs },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vpcs)) {
      $dara.Model.validateArray(this.vpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

