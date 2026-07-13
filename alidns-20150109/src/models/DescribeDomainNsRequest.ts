// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainNsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.<props="china"> You can call the [DescribeDomains](https://help.aliyun.com/document_detail/29751.html) operation to obtain this value.
   * <props="intl">You can call the [DescribeDomains](https://www.alibabacloud.com/help/en/dns/latest/api-alidns-2015-01-09-describedomains) operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * Valid values:
   * 
   * zh: Chinese<br>
   * en: English<br>
   * 
   * Default value: **zh**.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

