// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceServerScopeResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * ress_neg35flu6byysxwutaxu3dxxxx
   */
  resourceServerScopeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceServerScopeId: 'ResourceServerScopeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceServerScopeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

