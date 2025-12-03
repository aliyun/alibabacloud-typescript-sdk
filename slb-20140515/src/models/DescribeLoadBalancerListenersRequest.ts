// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class DescribeLoadBalancerListenersRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * HTTPS_443
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * @example
   * 443
   * 
   * **if can be null:**
   * true
   */
  listenerPort?: number;
  /**
   * @remarks
   * The protocol used by the listener. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * *   **http**
   * *   **https**
   * 
   * @example
   * http
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The IDs of the CLB instances. You can specify up to 10 instance IDs.
   * 
   * >  If you do not use the SDK to call this operation, use the LoadBalancerId.N parameter.
   * 
   * @example
   * lb-123wrwer
   */
  loadBalancerId?: string[];
  /**
   * @remarks
   * The number of entries to return in each call.
   * 
   * Valid values: **1** to **100**. If you do not specify this parameter, the default value **20** is used.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query and no subsequent queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the most recent region list.
   * 
   * >  If the endpoint of the selected region is slb.aliyuncs.com, the `RegionId` parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeLoadBalancerListenersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerId)) {
      $dara.Model.validateArray(this.loadBalancerId);
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

