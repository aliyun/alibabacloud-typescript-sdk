// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp67acfmxazb4ph***
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-58z57orgmt6d1****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4ph***
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkInterfaceId: 'NetworkInterfaceId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkInterfaceId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

