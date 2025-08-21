// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL7RsPolicyResponseBodyAttributesAttribute extends $dara.Model {
  /**
   * @remarks
   * The timeout period for a new connection. Valid values: **1** to **10**. Unit: seconds. Default value: **5**.
   * 
   * @example
   * 5
   */
  connectTimeout?: number;
  /**
   * @remarks
   * The expiration time of a connection, in seconds. If the number of failures at the origin server exceeds the **MaxFails** value, the address of the origin server is set to down and the expiration time is **FailTimeout**. The final value is the maximum value of **ConnectTimeout** and **FailTimeout**. Valid values: **1** to **3600**. Unit: seconds. Default value: **10**.
   * 
   * @example
   * 10
   */
  failTimeout?: number;
  /**
   * @remarks
   * The maximum number of failures. This parameter is related to health check. Valid values: **1** to **10**. Unit: seconds. Default value: **3**.
   * 
   * @example
   * 3
   */
  maxFails?: number;
  /**
   * @remarks
   * The primary/secondary flag. Valid values:
   * 
   * *   **active**: primary
   * *   **backup**: secondary
   * 
   * @example
   * active
   */
  mode?: string;
  /**
   * @remarks
   * The timeout period for a read connection. Valid values: **10** to **300**. Unit: seconds. Default value: **120**.
   * 
   * @example
   * 120
   */
  readTimeout?: number;
  /**
   * @remarks
   * The timeout period for a write connection. Valid values: **10** to **300**. Unit: seconds. Default value: **120**.
   * 
   * @example
   * 120
   */
  sendTimeout?: number;
  /**
   * @remarks
   * The weight of the origin server. This parameter takes effect only if the value of **ProxyMode** is **rr** or **ip_hash**.****
   * 
   * Valid values: **1** to **100**. Default value: **100**. A server with a higher weight receives more requests.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      connectTimeout: 'ConnectTimeout',
      failTimeout: 'FailTimeout',
      maxFails: 'MaxFails',
      mode: 'Mode',
      readTimeout: 'ReadTimeout',
      sendTimeout: 'SendTimeout',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectTimeout: 'number',
      failTimeout: 'number',
      maxFails: 'number',
      mode: 'string',
      readTimeout: 'number',
      sendTimeout: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBodyAttributes extends $dara.Model {
  /**
   * @remarks
   * The parameters for back-to-origin settings.
   */
  attribute?: DescribeL7RsPolicyResponseBodyAttributesAttribute;
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * 1.***.***.1
   */
  realServer?: string;
  /**
   * @remarks
   * The address type of the origin server. Valid values:
   * 
   * *   **0**: IP address
   * *   **1**: domain name
   * 
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: DescribeL7RsPolicyResponseBodyAttributesAttribute,
      realServer: 'string',
      rsType: 'number',
    };
  }

  validate() {
    if(this.attribute && typeof (this.attribute as any).validate === 'function') {
      (this.attribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the parameters for back-to-origin settings.
   */
  attributes?: DescribeL7RsPolicyResponseBodyAttributes[];
  /**
   * @remarks
   * The scheduling algorithm for back-to-origin traffic. Valid values:
   * 
   * *   **ip_hash**: the IP hash algorithm. This algorithm is used to redirect the requests from the same IP address to the same origin server.
   * *   **rr**: the round-robin algorithm. This algorithm is used to redirect requests to origin servers in turn.
   * *   **least_time**: the least response time algorithm. This algorithm is used to minimize the latency when requests are forwarded from Anti-DDoS Pro or Anti-DDoS Premium instances to origin servers based on the intelligent DNS resolution feature.
   * 
   * @example
   * rr
   */
  proxyMode?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9E7F6B2C-03F2-462F-9076-B782CF0DD502
   */
  requestId?: string;
  /**
   * @remarks
   * The timeout period for a read or write connection.
   * 
   * @example
   * 300
   */
  rsAttrRwTimeoutMax?: number;
  /**
   * @remarks
   * The back-to-origin retry switch. Valid values:
   * 
   * *   **1**: on
   * *   **0**: off
   * 
   * @example
   * 1
   */
  upstreamRetry?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      proxyMode: 'ProxyMode',
      requestId: 'RequestId',
      rsAttrRwTimeoutMax: 'RsAttrRwTimeoutMax',
      upstreamRetry: 'UpstreamRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeL7RsPolicyResponseBodyAttributes },
      proxyMode: 'string',
      requestId: 'string',
      rsAttrRwTimeoutMax: 'number',
      upstreamRetry: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

