// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthorizeRCSecurityGroupPermissionRequestSecurityGroupPermissions } from "./AuthorizeRcsecurityGroupPermissionRequestSecurityGroupPermissions";


export class AuthorizeRCSecurityGroupPermissionRequest extends $dara.Model {
  direction?: string;
  regionId?: string;
  securityGroupId?: string;
  securityGroupPermissions?: AuthorizeRCSecurityGroupPermissionRequestSecurityGroupPermissions[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupPermissions: 'SecurityGroupPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupPermissions: { 'type': 'array', 'itemType': AuthorizeRCSecurityGroupPermissionRequestSecurityGroupPermissions },
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

