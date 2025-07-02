// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPAM scope.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E897D16A-50EB-543F-B002-C5A26AB818FF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamScopeId: 'IpamScopeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamScopeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

