// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  alreadyJoined?: boolean;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * poc_test
   */
  searchKey?: string;
  /**
   * @example
   * 12345
   */
  serviceAccountId?: number;
  /**
   * @example
   * vpc-bp10wnlcmor****
   */
  vpcId?: string;
  /**
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyJoined: 'AlreadyJoined',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      searchKey: 'SearchKey',
      serviceAccountId: 'ServiceAccountId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyJoined: 'boolean',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      searchKey: 'string',
      serviceAccountId: 'number',
      vpcId: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

