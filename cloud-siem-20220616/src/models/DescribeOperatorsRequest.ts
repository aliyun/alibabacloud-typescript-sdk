// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperatorsRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select a region based on your asset location. Valid values:
   * 
   * - cn-hangzhou: Assets in the Chinese mainland and China (Hong Kong).
   * 
   * - ap-southeast-1: Assets outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this parameter to switch to the perspective of this member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that are managed by your enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The scenario for the operator. Valid values:
   * 
   * - If you leave this parameter empty, the default scenario is used.
   * 
   * - AGGREGATE: The aggregate function scenario.
   * 
   * @example
   * AGGREGATE
   */
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sceneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

