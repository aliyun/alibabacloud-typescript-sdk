// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CORSConfig } from "./Corsconfig";


export class HTTPTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * Authentication configuration
   * 
   * @example
   * {"JWKS":{"foo":"bar"},"TokenLookup":"header:Authorization:Bearer,cookie:AuthorizationCookie","ClaimPassBy":"query:uid:uid,header:name:name"}
   */
  authConfig?: string;
  /**
   * @remarks
   * The authentication type. Valid values are:
   * 
   * - **function**: Authentication is required.
   * 
   * - **anonymous**: Authentication is not required.
   * 
   * > The default type is **function**.
   * 
   * @example
   * anonymous
   */
  authType?: string;
  corsConfig?: CORSConfig;
  /**
   * @remarks
   * Specifies whether to disable access from the default public domain name. If set to true, accessing the function\\"s default public URL returns a 403 error. If set to false, this parameter has no effect.
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

