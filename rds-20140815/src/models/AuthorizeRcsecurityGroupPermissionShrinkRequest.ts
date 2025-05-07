// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeRCSecurityGroupPermissionShrinkRequest extends $dara.Model {
  direction?: string;
  regionId?: string;
  securityGroupId?: string;
  securityGroupPermissionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupPermissionsShrink: 'SecurityGroupPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupPermissionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

