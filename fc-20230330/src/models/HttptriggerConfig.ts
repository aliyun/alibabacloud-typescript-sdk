// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CORSConfig } from "./Corsconfig";


export class HTTPTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication configurations.
   * 
   * @example
   * {"JWKS":{"foo":"bar"},"TokenLookup":"header:Authorization:Bearer,cookie:AuthorizationCookie","ClaimPassBy":"query:uid:uid,header:name:name"}
   */
  authConfig?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   **function**: requires authentication.
   * *   **anonymous**: does not require authentication.
   * 
   * >  The default value is **function**
   * 
   * @example
   * anonymous
   */
  authType?: string;
  corsConfig?: CORSConfig;
  /**
   * @remarks
   * Specifies whether to disable access to the default Internet domain. If you set this parameter to true, a 403 error is returned if you access the default public URL provided by the function. A value of false does not have affect the running of the function.
   * 
   * @example
   * true
   */
  disableURLInternet?: boolean;
  /**
   * @remarks
   * The list of request methods. Multiple methods are supported.
   */
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      authType: 'authType',
      corsConfig: 'corsConfig',
      disableURLInternet: 'disableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authType: 'string',
      corsConfig: CORSConfig,
      disableURLInternet: 'boolean',
      methods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.corsConfig && typeof (this.corsConfig as any).validate === 'function') {
      (this.corsConfig as any).validate();
    }
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

