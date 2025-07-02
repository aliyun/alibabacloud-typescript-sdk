// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
      disableURLInternet: 'disableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authType: 'string',
      disableURLInternet: 'boolean',
      methods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

