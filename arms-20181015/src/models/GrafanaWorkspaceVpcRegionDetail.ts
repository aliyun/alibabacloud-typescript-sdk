// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceVpcRegionDetail extends $dara.Model {
  /**
   * @example
   * fc、ansm
   */
  fcConfig?: string;
  /**
   * @example
   * 配置ID
   */
  id?: number;
  /**
   * @example
   * Uninitialized
   */
  installStatus?: string;
  /**
   * @example
   * vpc-abc*****
   */
  name?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  /**
   * @example
   * 10988**********
   */
  userId?: string;
  vSwitchId?: string;
  vSwitchIds?: string[];
  /**
   * @example
   * vpc-2ze4siu98**********
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      fcConfig: 'fcConfig',
      id: 'id',
      installStatus: 'installStatus',
      name: 'name',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      securityGroupIds: 'securityGroupIds',
      userId: 'userId',
      vSwitchId: 'vSwitchId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcConfig: 'string',
      id: 'number',
      installStatus: 'string',
      name: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

