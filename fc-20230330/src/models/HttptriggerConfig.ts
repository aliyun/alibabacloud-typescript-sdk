// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CORSConfig } from "./Corsconfig";


export class HTTPTriggerConfig extends $dara.Model {
  /**
   * @example
   * {"JWKS":{"foo":"bar"},"TokenLookup":"header:Authorization:Bearer,cookie:AuthorizationCookie","ClaimPassBy":"query:uid:uid,header:name:name"}
   */
  authConfig?: string;
  /**
   * @example
   * anonymous
   */
  authType?: string;
  corsConfig?: CORSConfig;
  /**
   * @example
   * true
   */
  disableURLInternet?: boolean;
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

