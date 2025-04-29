// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInstanceAccessControlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-grgqc0mnuhkqciwtam
   */
  aclId?: string;
  /**
   * @remarks
   * The IP version. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-cn-v6419k43xxxxx
   */
  instanceId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      addressIPVersion: 'AddressIPVersion',
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      addressIPVersion: 'string',
      instanceId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

