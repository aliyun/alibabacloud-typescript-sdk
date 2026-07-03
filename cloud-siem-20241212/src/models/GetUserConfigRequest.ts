// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select a region for the Management Hub based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Assets in the Chinese mainland.
   * 
   * - ap-southeast-1: Assets outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to switch to the perspective of the specified member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionId: 'string',
      roleFor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

