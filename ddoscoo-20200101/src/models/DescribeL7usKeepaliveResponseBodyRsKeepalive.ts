// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL7UsKeepaliveResponseBodyRsKeepalive extends $dara.Model {
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
      enabled: 'Enabled',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

