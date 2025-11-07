// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitAccountsRequest extends $dara.Model {
  /**
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * github
   */
  platform?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * roleName
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      platform: 'Platform',
      regionId: 'RegionId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      platform: 'string',
      regionId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

