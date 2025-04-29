// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateInstanceWithPrivateDNSShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-hz-ead4f4b0bac8
   */
  instanceId?: string;
  /**
   * @remarks
   * The internal domain names included in the resolution.
   * 
   * This parameter is required.
   */
  intranetDomainsShrink?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intranetDomainsShrink: 'IntranetDomains',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intranetDomainsShrink: 'string',
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

