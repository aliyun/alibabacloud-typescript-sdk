// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutomateResponseConfigFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * The type of automated response. Valid values:
   * 
   * - event: event
   * 
   * - alert: alert
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The region where the Data Management center of threat analysis is deployed. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Assets in the Chinese mainland and Hong Kong (China).
   * 
   * - ap-southeast-1: Assets outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this parameter to switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of view. Valid values:
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that are managed by the administrator account.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      autoResponseType: 'AutoResponseType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoResponseType: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

