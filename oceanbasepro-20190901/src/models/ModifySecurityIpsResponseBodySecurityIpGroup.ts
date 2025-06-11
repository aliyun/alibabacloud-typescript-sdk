// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsResponseBodySecurityIpGroup extends $dara.Model {
  /**
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * online_paycore
   */
  securityIpGroupName?: string;
  /**
   * @example
   * 121.41.106.33,100.104.7.0/26
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

