// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the domain name or website to query.
   * 
   * > Fuzzy match is not supported. Enter the complete domain name or website name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

