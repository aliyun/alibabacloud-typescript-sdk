// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeRCSecurityGroupPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the security group rules that you want to delete. Valid values:
   * 
   * *   **ingress**: inbound security group rules.
   * *   **egress**: outbound security group rules.
   * 
   * >  You can specify security group rules only in the same direction in a request.
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
   * The IDs of the security group rules that you want to delete.
   */
  securityGroupRuleIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupRuleIdListShrink: 'SecurityGroupRuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupRuleIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

