// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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
   * The listener instance IDs. You can specify up to 20 listener instance IDs.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The listener protocol used for filtering. Valid values:
   * 
   * - **HTTP**: The protocol type is HTTP.
   * - **HTTPS**: The protocol type is HTTPS.
   * - **QUIC**: The protocol type is QUIC.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The Application Load Balancing instance IDs. You can specify up to 20 instance IDs.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return in a single call. This parameter is optional. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates whether a subsequent query is available. Valid values:
   * - Leave this parameter empty for the first query or when no subsequent query is required.
   * - For a subsequent query, set this parameter to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I4FmYAXGKPd****
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

