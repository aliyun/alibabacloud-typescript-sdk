// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitRepositoriesRequest extends $dara.Model {
  /**
   * @example
   * TF-CreateApplication-1647587475-84104b89-eba5-47a8-b2fd-807b8b7d
   */
  clientToken?: string;
  /**
   * @example
   * 6fekfmnfll135123kdf33
   */
  orgId?: string;
  /**
   * @example
   * aliyun-computenest
   */
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dhuai
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
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
      orgId: 'OrgId',
      orgName: 'OrgName',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platform: 'Platform',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      orgId: 'string',
      orgName: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

