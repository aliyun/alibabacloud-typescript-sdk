// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * test_acc
   */
  accountName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. You do not need to specify this parameter for the first request. In a subsequent request, set this parameter to the NextToken value returned in the previous response.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The node type. This parameter is required when you query the accounts of a PolarDB Search node.
   * 
   * - Search
   * 
   * @example
   * Search
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - 30
   * 
   * - 50
   * 
   * - 100
   * 
   * The default value is 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

