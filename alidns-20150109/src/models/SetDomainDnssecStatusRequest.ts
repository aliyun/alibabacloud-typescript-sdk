// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDomainDnssecStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for which you want to enable the DNSSEC. Only the users of the paid editions of Alibaba Cloud DNS can enable this feature.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNSSEC status. Valid values:
   * 
   * *   ON: enables DNSSEC for the domain name.
   * *   OFF: disables DNSSEC for the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

