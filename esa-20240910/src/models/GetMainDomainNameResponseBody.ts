// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMainDomainNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The level of the domain name.
   * 
   * @example
   * 2
   */
  domainLevel?: number;
  /**
   * @remarks
   * The root domain name.
   * 
   * @example
   * example.com
   */
  mainDomainName?: string;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * sub
   */
  RR?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLevel: 'DomainLevel',
      mainDomainName: 'MainDomainName',
      RR: 'RR',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLevel: 'number',
      mainDomainName: 'string',
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

