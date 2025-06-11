// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityIpGroupResponseBodySecurityIpGroup extends $dara.Model {
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=CreateSecurityIpGroup
   * &InstanceId=ob317v4uif****
   * &SecurityIps=192.168.1.1,192.168.0.0.1/8
   * &SecurityIpGroupName=pay_online
   * &Common request parameters
   * ```
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * You can call this operation to create an IP address whitelist group.
   * 
   * @example
   * pay_online
   */
  securityIpGroupName?: string;
  /**
   * @example
   * 192.168.1.1,192.168.0.0.1/8
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

