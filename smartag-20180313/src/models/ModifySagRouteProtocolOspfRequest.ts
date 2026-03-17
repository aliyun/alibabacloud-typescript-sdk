// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagRouteProtocolOspfRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OSPF area.
   * 
   * Valid values: **1 to 2147483647**.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  areaId?: number;
  /**
   * @remarks
   * The authentication method. Valid values:
   * 
   * *   **NONE**: does not enable authentication.
   * *   **CLEARTEXT**: uses plaintext authentication. You must enter the plaintext password.
   * *   **MD5**: uses MD5 authentication. You must enter the MD5 key ID and the MD5 key.
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  authenticationType?: string;
  /**
   * @remarks
   * The timeout period of OSPF. Unit: seconds.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  deadTime?: number;
  /**
   * @remarks
   * The time interval at which Hello packets are sent. Unit: seconds.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  helloTime?: number;
  /**
   * @remarks
   * The MD5 key value.
   * 
   * Valid values: **1 to 47**.
   * 
   * >  This parameter is required only if **AuthenticationType** is set to **MD5**.
   * 
   * @example
   * 5
   */
  md5Key?: string;
  /**
   * @remarks
   * The ID of the MD5 key.
   * 
   * Valid values: **1 to 2147483647**.
   * 
   * >  This parameter is required only if **AuthenticationType** is set to **MD5**.
   * 
   * @example
   * 7
   */
  md5KeyId?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The plaintext password.
   * 
   * The password must be 1 to 8 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * >  This parameter is required only if **AuthenticationType** is set to **CLEARTEXT**.
   * 
   * @example
   * 1212****
   */
  password?: string;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the router that has OSPF enabled.
   * 
   * Set the value to an IPv4 address.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-whfn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the SAG device associated with the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30***
   */
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      authenticationType: 'AuthenticationType',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      md5Key: 'Md5Key',
      md5KeyId: 'Md5KeyId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      authenticationType: 'string',
      deadTime: 'number',
      helloTime: 'number',
      md5Key: 'string',
      md5KeyId: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

