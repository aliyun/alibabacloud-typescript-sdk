// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. Call [DescribeDomains](https://help.aliyun.com/document_detail/2357286.html) to obtain the domain name.
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
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to return detailed attributes of the domain name. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * The default value is false.
   * 
   * If you set this parameter to **true**, the response includes the following parameters: lineType, minTtl, recordLineTreeJson, recordLines, lineCode, lineDisplayName, lineName, regionLines, and slaveDns.
   * 
   * @example
   * true
   */
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

