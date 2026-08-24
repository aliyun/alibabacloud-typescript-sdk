// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulnerabilitiesResponseBodyVulnerabilities extends $dara.Model {
  /**
   * @remarks
   * The list of CVE IDs corresponding to the vulnerability. An empty list is returned if no CVE is associated.
   */
  cveList?: string[];
  /**
   * @remarks
   * The English description of the vulnerability.
   * 
   * @example
   * This update fixes several remote code execution and privilege escalation vulnerabilities.
   */
  descriptionEn?: string;
  /**
   * @remarks
   * The Chinese description of the vulnerability.
   * 
   * @example
   * 该更新修复了若干远程代码执行与权限提升漏洞
   */
  descriptionZh?: string;
  /**
   * @remarks
   * The list of Knowledge Base (KB) numbers corresponding to the vulnerability.
   */
  kbs?: string[];
  /**
   * @remarks
   * The name of the product affected by the vulnerability.
   * 
   * @example
   * Windows 11 Home
   */
  product?: string;
  /**
   * @remarks
   * The release time of the vulnerability, in seconds as a UNIX timestamp.
   * 
   * @example
   * 1786291200
   */
  releaseTime?: number;
  /**
   * @remarks
   * The English title of the vulnerability.
   * 
   * @example
   * 2026-08 Cumulative Update for Windows 11
   */
  titleEn?: string;
  /**
   * @remarks
   * The Chinese title of the vulnerability.
   * 
   * @example
   * 2026-08 适用于 Windows 11 的累积更新
   */
  titleZh?: string;
  /**
   * @remarks
   * The patch ID corresponding to the vulnerability. For Windows vulnerabilities, this is the Microsoft patch Update ID.
   * 
   * @example
   * 9f8c1d2e-4b7a-4c31-9e05-6d2f8a71****
   */
  updateId?: string;
  /**
   * @remarks
   * The number of user endpoint devices affected by the vulnerability.
   * 
   * @example
   * 12
   */
  vulDeviceCount?: number;
  /**
   * @remarks
   * The vulnerability risk level, mapped from the vendor risk level: Critical is mapped to High, Important is mapped to Mid, and others are mapped to Low. Valid values:
   * - **High**: high risk.
   * - **Mid**: medium risk.
   * - **Low**: low risk.
   * 
   * @example
   * High
   */
  vulLevel?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * - **windows**: Windows system vulnerability.
   * - **ai_agent**: AI Agent vulnerability.
   * 
   * @example
   * windows
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      cveList: 'CveList',
      descriptionEn: 'DescriptionEn',
      descriptionZh: 'DescriptionZh',
      kbs: 'Kbs',
      product: 'Product',
      releaseTime: 'ReleaseTime',
      titleEn: 'TitleEn',
      titleZh: 'TitleZh',
      updateId: 'UpdateId',
      vulDeviceCount: 'VulDeviceCount',
      vulLevel: 'VulLevel',
      vulType: 'VulType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveList: { 'type': 'array', 'itemType': 'string' },
      descriptionEn: 'string',
      descriptionZh: 'string',
      kbs: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      releaseTime: 'number',
      titleEn: 'string',
      titleZh: 'string',
      updateId: 'string',
      vulDeviceCount: 'number',
      vulLevel: 'string',
      vulType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cveList)) {
      $dara.Model.validateArray(this.cveList);
    }
    if(Array.isArray(this.kbs)) {
      $dara.Model.validateArray(this.kbs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVulnerabilitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities that match the query conditions.
   * 
   * @example
   * 37
   */
  totalNum?: number;
  /**
   * @remarks
   * The list of vulnerabilities.
   */
  vulnerabilities?: ListVulnerabilitiesResponseBodyVulnerabilities[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      vulnerabilities: 'Vulnerabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'number',
      vulnerabilities: { 'type': 'array', 'itemType': ListVulnerabilitiesResponseBodyVulnerabilities },
    };
  }

  validate() {
    if(Array.isArray(this.vulnerabilities)) {
      $dara.Model.validateArray(this.vulnerabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

