// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityIpGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * This parameter is required.
   * 
   * @example
   * pay_online
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The return result of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * {"192.168.1.1","192.168.0.0.1/8"}
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

