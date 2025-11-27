// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeRCSecurityGroupPermissionRequest extends $dara.Model {
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
  securityGroupRuleIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupRuleIdList: 'SecurityGroupRuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupRuleIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupRuleIdList)) {
      $dara.Model.validateArray(this.securityGroupRuleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

