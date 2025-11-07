// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitOrganizationsRequest extends $dara.Model {
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
   * geegenw-j-imwinmtuej
   */
  owner?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      owner: 'Owner',
      platform: 'Platform',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      owner: 'string',
      platform: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

