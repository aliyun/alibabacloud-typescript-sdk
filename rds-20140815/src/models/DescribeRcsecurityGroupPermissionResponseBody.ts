// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions } from "./DescribeRcsecurityGroupPermissionResponseBodySecurityGroupPermissions";


export class DescribeRCSecurityGroupPermissionResponseBody extends $dara.Model {
  innerAccessPolicy?: string;
  regionId?: string;
  requestId?: string;
  securityGroupId?: string;
  securityGroupPermissions?: DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      innerAccessPolicy: 'InnerAccessPolicy',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupPermissions: 'SecurityGroupPermissions',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerAccessPolicy: 'string',
      regionId: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupPermissions: { 'type': 'array', 'itemType': DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupPermissions)) {
      $dara.Model.validateArray(this.securityGroupPermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

