// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the current user has joined the workspace.
   * 
   * @example
   * true
   */
  alreadyJoined?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the bucket is located.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * poc_test
   */
  searchKey?: string;
  /**
   * @remarks
   * The service account ID.
   * 
   * @example
   * 12345
   */
  serviceAccountId?: number;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * > This parameter cannot be used as a filter.
   * 
   * @example
   * vpc-bp10wnlcmor****
   */
  vpcId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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

