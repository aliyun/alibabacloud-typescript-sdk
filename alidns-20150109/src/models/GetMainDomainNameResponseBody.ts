// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMainDomainNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The level of the input domain name.
   * 
   * @example
   * 2
   */
  domainLevel?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * www
   */
  RR?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLevel: 'DomainLevel',
      domainName: 'DomainName',
      RR: 'RR',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLevel: 'number',
      domainName: 'string',
      RR: 'string',
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

