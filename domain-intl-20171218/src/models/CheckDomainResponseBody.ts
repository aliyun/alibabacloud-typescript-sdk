// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  avail?: string;
  /**
   * @example
   * nvgtntights.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  dynamicCheck?: boolean;
  /**
   * @example
   * true
   */
  premium?: string;
  /**
   * @example
   * 2000
   */
  price?: number;
  /**
   * @example
   * In use
   */
  reason?: string;
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avail: 'Avail',
      domainName: 'DomainName',
      dynamicCheck: 'DynamicCheck',
      premium: 'Premium',
      price: 'Price',
      reason: 'Reason',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avail: 'string',
      domainName: 'string',
      dynamicCheck: 'boolean',
      premium: 'string',
      price: 'number',
      reason: 'string',
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

