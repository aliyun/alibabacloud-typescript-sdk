// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can specify up to 50 instances in a single request. Valid values of N: 1 to 50.
   */
  instanceId?: string[];
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The plugin name. The full character set is supported. The name can be up to 255 characters in length.
   * 
   * - If you do not specify this parameter, the status of all installed plugins on the instance is queried.
   * 
   *     > If you do not specify this parameter, you can specify only one instance ID.
   * 
   * - If you specify this parameter, the status of the specified plugin on the instances is queried.
   * 
   * @example
   * testPluginName
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. Use NextToken and MaxResults to perform a paging query instead.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. Use NextToken and MaxResults to perform a paging query instead.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

