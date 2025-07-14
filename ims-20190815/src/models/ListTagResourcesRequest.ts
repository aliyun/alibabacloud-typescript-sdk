// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * alice
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. If a response is truncated because it reaches the value of PageSize, the value of IsTruncated will be true. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of resource N.
   * 
   * Valid values of N: 1 to 50. If ResourceType is set to user, the resource ID is the ID of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The name of resource N.
   * 
   * Valid values of N: 1 to 50. If ResourceType is set to user, the resource name is the name of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   */
  resourcePrincipalName?: string[];
  /**
   * @remarks
   * The type of the resource. Valid value:
   * 
   * *   user: a RAM user
   * 
   * @example
   * user
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourcePrincipalName: 'ResourcePrincipalName',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageSize: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourcePrincipalName: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.resourcePrincipalName)) {
      $dara.Model.validateArray(this.resourcePrincipalName);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

