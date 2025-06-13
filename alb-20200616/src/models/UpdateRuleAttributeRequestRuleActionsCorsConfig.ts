// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleAttributeRequestRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether credentials can be carried in CORS requests. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The trusted headers of CORS requests.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The trusted HTTP methods of CORS requests.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The trusted origins. You can specify one or more values, or only an asterisk (`*`).
   * 
   * *   The value must start with `http://` or `https://`, and be followed by a valid domain name, including top-level wildcard domain names. Example: `http://*.test.abc.example.com`.
   * *   You can specify ports for a single value. Valid values: **1** to **65535**.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The headers that can be exposed.
   */
  exposeHeaders?: string[];
  /**
   * @remarks
   * The maximum cache time of dry runs in the browser. Unit: seconds.
   * 
   * Valid values: **-1** to **172800**.
   * 
   * @example
   * 1000
   */
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowHeaders)) {
      $dara.Model.validateArray(this.allowHeaders);
    }
    if(Array.isArray(this.allowMethods)) {
      $dara.Model.validateArray(this.allowMethods);
    }
    if(Array.isArray(this.allowOrigin)) {
      $dara.Model.validateArray(this.allowOrigin);
    }
    if(Array.isArray(this.exposeHeaders)) {
      $dara.Model.validateArray(this.exposeHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

