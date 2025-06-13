// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerGroupRequestStickySessionConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie that you want to configure for the server.
   * 
   * The cookie must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * >  This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **server**.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA****
   */
  cookie?: string;
  /**
   * @remarks
   * The maximum amount of time to wait before the session cookie expires. Unit: seconds
   * 
   * Valid values: **1** to **86400**
   * 
   * Default value: **1000**
   * 
   * >  This parameter takes effect only when **StickySessionEnabled** is set to **true** and **StickySessionType** is set to **Insert**.
   * 
   * @example
   * 1000
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter takes effect when the **ServerGroupType** parameter is set to **Instance** or **Ip**.
   * 
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method that is used to handle cookies. Valid values:
   * 
   * *   **Insert** (default value): inserts a cookie. The first time a client accesses ALB, ALB inserts the SERVERID cookie into the HTTP or HTTPS response packet. Subsequent requests from the client that carry this cookie are forwarded to the same backend server as the first request.
   * *   **Server**: rewrites a cookie. ALB rewrites the custom cookies in requests from a client. Subsequent requests from the client that carry the new cookie are forwarded to the same backend server as the first request.
   * 
   * >  This parameter takes effect when the **StickySessionEnabled** parameter is set to **true**.
   * 
   * @example
   * Insert
   */
  stickySessionType?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      stickySessionEnabled: 'StickySessionEnabled',
      stickySessionType: 'StickySessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      stickySessionEnabled: 'boolean',
      stickySessionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

