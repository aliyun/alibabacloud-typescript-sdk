// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainExtensionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the additional domain name.
   * 
   * @example
   * de-bp1rp7ta19******
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The frontend port that is used by the SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6E7EFC9-0938-40CA-877D-9BEDBD21D357
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      listenerPort: 'number',
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

