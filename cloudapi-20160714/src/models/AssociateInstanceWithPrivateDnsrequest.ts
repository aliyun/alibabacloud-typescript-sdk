// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateInstanceWithPrivateDNSRequest extends $dara.Model {
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
  intranetDomains?: string[];
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intranetDomains: 'IntranetDomains',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intranetDomains: { 'type': 'array', 'itemType': 'string' },
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.intranetDomains)) {
      $dara.Model.validateArray(this.intranetDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

