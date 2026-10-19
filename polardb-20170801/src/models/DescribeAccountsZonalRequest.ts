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
   * > Note: Only the IDs of edge clusters (clusters created by setting the CloudProvider parameter to ENS when calling CreateDBCluster) are supported. If you specify the ID of common clusters, the CrossCloudOpenAPI.CallError error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the last API call. If no subsequent query is required, do not specify this parameter.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The node type. This parameter is required when you query the accounts of PolarDB Search nodes. Valid values:
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
   * The page number. Valid values: integers greater than 0 and less than or equal to the maximum value of the Integer type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - 30
   * 
   * - 50
   * 
   * - 100
   * 
   * Default value: 30.
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

