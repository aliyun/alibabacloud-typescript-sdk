// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainOfDnsProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name that is originally bound to the instance. If no value is returned for this parameter, the instance is bound to a domain name for the first time.
   * 
   * @example
   * originaldomain.com
   */
  originalDomain?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      originalDomain: 'OriginalDomain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalDomain: 'string',
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

