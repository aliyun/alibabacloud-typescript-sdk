// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSharedTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  resourceId?: string;
  /**
   * @remarks
   * The owner of the resource share.
   * 
   * *   Self: your account. If you set the value to Self, the principals that are associated with your resource shares are queried.
   * *   OtherAccounts: another account. If you set the value to OtherAccounts, the resource shares with which your account is associated and the owners of the resource shares are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The ID of a resource share.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five resource shares can be specified at a time.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the principals.
   * 
   * @example
   * 114240524784****
   */
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceType: 'ResourceType',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceShareIds)) {
      $dara.Model.validateArray(this.resourceShareIds);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

