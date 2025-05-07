// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCloudResourceRequestRedirectRequestHeaders } from "./ModifyCloudResourceRequestRedirectRequestHeaders";


export class ModifyCloudResourceRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the persistent connection feature. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter specifies the number of persistent connections that can be reused after you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of idle persistent connections. Valid values: 10 to 3600. Default value: 3600. Unit: seconds.
   * 
   * >  This parameter specifies the period of time after which an idle persistent connection is closed.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The timeout period of read connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header fields, which are key-value pairs. The fields are used to mark requests that pass through WAF.
   */
  requestHeaders?: ModifyCloudResourceRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * The timeout period of write connections. Unit: seconds. Valid values: 1 to 3600.
   * 
   * @example
   * 1
   */
  writeTimeout?: number;
  /**
   * @remarks
   * The method that is used to obtain the originating IP address of a client. Valid values:
   * 
   * *   **0**: No Layer 7 proxies are deployed in front of WAF.
   * *   **1**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the originating IP address of the client.
   * *   **2**: WAF reads the value of a custom header field as the originating IP address of the client.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the originating IP address of a client. Specify the value in the ["header1","header2",...] format.
   * 
   * >  This parameter is required only if you set **XffHeaderMode** to 2.
   */
  xffHeaders?: string[];
  /**
   * @remarks
   * Specifies whether to use the X-Forward-For-Proto header field to pass the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      writeTimeout: 'WriteTimeout',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': ModifyCloudResourceRequestRedirectRequestHeaders },
      writeTimeout: 'number',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
      xffProto: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.requestHeaders)) {
      $dara.Model.validateArray(this.requestHeaders);
    }
    if(Array.isArray(this.xffHeaders)) {
      $dara.Model.validateArray(this.xffHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

