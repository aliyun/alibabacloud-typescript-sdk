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

