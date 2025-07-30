// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationGrantScopeResponseBodyApplicationGrantScope extends $dara.Model {
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
  grantScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      grantScopes: 'GrantScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
  applicationGrantScope?: GetApplicationGrantScopeResponseBodyApplicationGrantScope;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGrantScope: 'ApplicationGrantScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGrantScope: GetApplicationGrantScopeResponseBodyApplicationGrantScope,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationGrantScope && typeof (this.applicationGrantScope as any).validate === 'function') {
      (this.applicationGrantScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

