// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL7UsKeepaliveResponseBodyRsKeepalive extends $dara.Model {
  dsKeepaliveTimeout?: number;
  /**
   * @remarks
   * Indicates whether Back-to-origin Persistent Connections is turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The number of requests that reuse persistent connections.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of idle persistent connections.
   * 
   * @example
   * 30
   */
  keepaliveTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      dsKeepaliveTimeout: 'DsKeepaliveTimeout',
      enabled: 'Enabled',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsKeepaliveTimeout: 'number',
      enabled: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7UsKeepaliveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39499F01-19D9-4EA4-A0E9-C6014BA5CDBE
   */
  requestId?: string;
  /**
   * @remarks
   * The value of the Back-to-origin Persistent Connections parameter.
   */
  rsKeepalive?: DescribeL7UsKeepaliveResponseBodyRsKeepalive;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rsKeepalive: 'RsKeepalive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rsKeepalive: DescribeL7UsKeepaliveResponseBodyRsKeepalive,
    };
  }

  validate() {
    if(this.rsKeepalive && typeof (this.rsKeepalive as any).validate === 'function') {
      (this.rsKeepalive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

