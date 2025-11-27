// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeRCSecurityGroupPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the rule. Valid values:
   * 
   * *   **ingress**: the inbound security group rule.
   * *   **egress**: the outbound security group rule.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-2ze27hs990o2hn9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The information about the security group.
   */
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

