// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequestNetwork extends $dara.Model {
  /**
   * @remarks
   * The dedicated gateway ID. This parameter is required. If this parameter is not specified, the request fails.
   * 
   * @example
   * gw-248xxxxxxvlkhtbrda
   */
  gatewayId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-584xxxxxx7h08llvoww5tv5gl
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1xxxxxxwmssgq28gye8
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID. This parameter is required when GatewayId is set to an ALB gateway, and you must specify the VPC ID associated with the gateway. You can call the ListGatewayIntranetLinkedVpc operation to query the association.
   * 
   * @example
   * vpc-bp1xxxxxx0qrykjr9b
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The user-defined labels.
   * 
   * @example
   * {"key1":"value1","key2":null}
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The name of the service group. Only lowercase letters, digits, and underscores are allowed. The format is [a-z0-9_]+.
   * 
   * @example
   * foo
   */
  name?: string;
  /**
   * @remarks
   * The VPC configuration.
   */
  network?: CreateGroupRequestNetwork;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12xx34
   */
  workSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      network: 'Network',
      workSpaceId: 'WorkSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      network: CreateGroupRequestNetwork,
      workSpaceId: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

