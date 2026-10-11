// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 256 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * testValue
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
   * The maximum number of entries to return per page when paging through a paged query. Valid values: 1 to 1000. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - Leave this parameter empty for the first query or when no next query is required.
   * - If a next query is required, set this parameter to the value of NextToken returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource IDs. You can specify up to 50 resource IDs in a single call. You must specify at least one of ResourceId and Tag.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - **EgressProxyGateway**: egress proxy gateway instance.
   * - **EgressProxyIpPool**: egress proxy IP address pool.
   * - **EgressProxyConfiguration**: egress configuration.
   * - **EgressProxyRuleGroup**: egress rule group.
   * 
   * This parameter is required.
   * 
   * @example
   * EgressProxyGateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags in a single call. You must specify at least one of ResourceId and Tag.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

