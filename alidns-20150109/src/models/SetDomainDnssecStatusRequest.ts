// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDomainDnssecStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for which you want to enable DNSSEC. This feature is available only to users of paid Alibaba Cloud DNS.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the return value. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The status of DNSSEC. Valid values:
   * 
   * - ON: Enables DNSSEC.
   * 
   * - OFF: Disables DNSSEC.
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

