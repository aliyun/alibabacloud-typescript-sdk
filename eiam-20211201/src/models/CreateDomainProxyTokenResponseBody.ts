// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainProxyTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the proxy token of the domain name.
   * 
   * @example
   * pt_mtohn73423stghoivjmi4jwxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainProxyTokenId: 'DomainProxyTokenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyTokenId: 'string',
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

