// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupAttributeRequestStickySessionConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie to be configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII characters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * > This parameter takes effect when the **StickySessionEnabled** parameter is set to **true** and the **StickySessionType** parameter is set to **Server**.
   * 
   * @example
   * B490B5EBF6F3CD402E515D22BCDA1598
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Unit: seconds.
   * 
   * Valid values: **1** to **86400**.
   * 
   * > This parameter takes effect when the **StickySessionEnabled** parameter is set to **true** and the **StickySessionType** parameter is set to **Insert**.
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
   * *   **false** (default)
   * 
   * @example
   * false
   */
  stickySessionEnabled?: boolean;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **Insert**: inserts a cookie.
   * 
   * ALB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client contains this cookie and the listener forwards this request to the recorded backend server.
   * 
   * *   **Server**: rewrites a cookie.
   * 
   * When ALB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. Subsequent requests to ALB carry this user-defined cookie, and ALB determines the destination servers of the requests based on the cookies.
   * 
   * > This parameter takes effect when the **StickySessionEnabled** parameter is set to **true** for the server group.
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

