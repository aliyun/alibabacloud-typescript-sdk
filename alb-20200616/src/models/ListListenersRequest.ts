// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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
   * The listener IDs. You can specify at most 20 listener IDs.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The listener protocol. Valid values:
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * *   **QUIC**
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ALB instance ID. You can specify at most 20 instance IDs.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. This parameter is optional. Valid values: **1 to 100**. If you do not specify this parameter, the default value **20** is used.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   If a value is returned for NextToken, you must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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

