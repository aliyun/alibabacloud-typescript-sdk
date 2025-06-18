// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ForwardInfo } from "./ForwardInfo";


export class UserVpc extends $dara.Model {
  defaultForwardInfo?: ForwardInfo;
  defaultRoute?: string;
  extendedCIDRs?: string[];
  roleArn?: string;
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultForwardInfo: 'DefaultForwardInfo',
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      roleArn: 'RoleArn',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultForwardInfo: ForwardInfo,
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      roleArn: 'string',
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.defaultForwardInfo && typeof (this.defaultForwardInfo as any).validate === 'function') {
      (this.defaultForwardInfo as any).validate();
    }
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

