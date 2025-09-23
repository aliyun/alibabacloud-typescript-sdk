// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSharedResourcesRequest extends $dara.Model {
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
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  resourceArns?: string[];
  /**
   * @remarks
   * The ID of a shared resource.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The owner of the resource shares. Valid values:
   * 
   * *   Self: your account. If you set the value to Self, the resources you share with other accounts are queried.
   * *   OtherAccounts: another account. If you set the value to OtherAccounts, the resources other accounts share with you are queried.
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
   * The ID of the principal or resource owner.
   * 
   * *   If the value of `ResourceOwner` is `Self`, set this parameter to the ID of a principal.
   * *   If the value of `ResourceOwner` is `OtherAccounts`, set this parameter to the ID of a resource owner.
   * 
   * @example
   * 172050525300****
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceArns: 'ResourceArns',
      resourceIds: 'ResourceIds',
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceType: 'ResourceType',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceArns: { 'type': 'array', 'itemType': 'string' },
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      target: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceArns)) {
      $dara.Model.validateArray(this.resourceArns);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.resourceShareIds)) {
      $dara.Model.validateArray(this.resourceShareIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

