// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tags. The tag key cannot be an empty string.
   * 
   * It can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tags. The tag value can be an empty string.
   * 
   * It can be up to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * product
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

export class ListListenersRequest extends $dara.Model {
  /**
   * @remarks
   * The listener IDs. You can specify up to 20 listeners.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The IDs of the NLB instances. You can specify up to 20 instances.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The number of entries to return in each call. Valid values: **1** to **100**. Default value: **20**
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to specify a particular page of results. Valid values:
   * 
   * *   Leave this parameter empty for the first query or the only query.
   * *   Set this parameter to the value of NextToken obtained from the previous query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable fine-grained monitoring. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  secSensorEnabled?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListListenersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      listenerIds: 'ListenerIds',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerIds: 'LoadBalancerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      listenerProtocol: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      secSensorEnabled: 'string',
      tag: { 'type': 'array', 'itemType': ListListenersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.listenerIds)) {
      $dara.Model.validateArray(this.listenerIds);
    }
    if(Array.isArray(this.loadBalancerIds)) {
      $dara.Model.validateArray(this.loadBalancerIds);
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

