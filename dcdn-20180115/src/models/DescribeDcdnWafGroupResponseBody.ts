// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafGroupResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   **0**: Common
   * *   **1**: WordPress
   * *   **2**: DedeCMS
   * *   **3**: Discuz
   * *   **4**: PHP CMS
   * *   **5**: ECShop
   * *   **6**: ShopEX
   * *   **7**: Drupal
   * *   **8**: Joomla
   * *   **9**: MetInfo
   * *   **10**: Struts2
   * *   **11**: Spring Boot
   * *   **12**: JBoss
   * *   **13**: WebLogic
   * *   **14**: WebSphere
   * *   **15**: Tomcat
   * *   **16**: Elastic Search
   * *   **18**: ThinkPHP
   * *   **19**: Fastjson
   * *   **20**: ImageMagick
   * *   **21**: PHPWind
   * *   **22**: phpMyAdmin
   * *   **23**: Resin
   * *   **24**: IIS
   * *   **99**: Others
   * 
   * @example
   * 1
   */
  applicationType?: number;
  /**
   * @remarks
   * The Common Vulnerabilities and Exposures (CVE) ID of the related vulnerability.
   * 
   * @example
   * CVE-2021-22945
   */
  cveId?: string;
  /**
   * @remarks
   * The CVE link.
   * 
   * @example
   * https://nxx.nxxx.gov/vuln/detail/CVE-2022-XXXX
   */
  cveUrl?: string;
  /**
   * @remarks
   * The description of the WAF rule.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The time when the rule was modified.
   * 
   * @example
   * 2021-12-29T17:08:45Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the custom WAF rule.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The name of the WAF rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Protection type Valid values:
   * 
   * *   **11**: SQL injection
   * *   **12**: cross-site scripting (XSS)
   * *   **13**: code execution
   * *   **14**: carriage return line feeds (CRLF)
   * *   **15**: local file inclusion
   * *   **16**: remote file inclusion
   * *   **17**: webshells
   * *   **19**: cross-site request forgery
   * *   **20**: others
   * *   **21**: SEMA
   * 
   * @example
   * 11
   */
  protectionType?: number;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the managed rule. Valid values:
   * 
   * *   **1**: high risk
   * *   **2**: medium risk
   * *   **3**: low risk
   * 
   * @example
   * 2
   */
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      cveId: 'CveId',
      cveUrl: 'CveUrl',
      description: 'Description',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      protectionType: 'ProtectionType',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'number',
      cveId: 'string',
      cveUrl: 'string',
      description: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      protectionType: 'number',
      riskLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom WAF rule group.
   * 
   * @example
   * 1012
   */
  id?: number;
  /**
   * @remarks
   * The name of the WAF rule group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the rule.
   */
  rules?: DescribeDcdnWafGroupResponseBodyRules[];
  /**
   * @remarks
   * Indicates whether to enable subscription. Valid values:
   * 
   * *   **on:**
   * *   **off**
   * 
   * @example
   * on
   */
  subscribe?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 1012
   */
  templateId?: number;
  /**
   * @remarks
   * The total number of rules that are filtered out.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      subscribe: 'Subscribe',
      templateId: 'TemplateId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeDcdnWafGroupResponseBodyRules },
      subscribe: 'string',
      templateId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

