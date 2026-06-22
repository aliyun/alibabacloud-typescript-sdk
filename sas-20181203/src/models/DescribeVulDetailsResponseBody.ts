// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulDetailsResponseBodyCvesClassifys extends $dara.Model {
  /**
   * @remarks
   * The classification of the vulnerability.
   * 
   * @example
   * remote_code_execution
   */
  classify?: string;
  /**
   * @remarks
   * The URL of the vulnerability demo video.
   * 
   * @example
   * https://example.com
   */
  demoVideoUrl?: string;
  /**
   * @remarks
   * The description of the vulnerability classification.
   * 
   * @example
   * privilege escalation
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      demoVideoUrl: 'DemoVideoUrl',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      demoVideoUrl: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBodyCves extends $dara.Model {
  /**
   * @remarks
   * The classification of the vulnerability.
   * 
   * @example
   * remote_code_execution
   */
  classify?: string;
  /**
   * @remarks
   * The list of vulnerability classifications.
   */
  classifys?: DescribeVulDetailsResponseBodyCvesClassifys[];
  /**
   * @remarks
   * The China National Vulnerability Database (CNVD) ID.
   * 
   * @example
   * CNVD-2019-9167
   * 
   * @deprecated
   */
  cnvdId?: string;
  /**
   * @remarks
   * The difficulty of exploiting the vulnerability. Valid values:
   * 
   * - **LOW**: low
   * - **MEDIUM**: medium
   * - **HIGH**: high.
   * 
   * @example
   * LOW
   * 
   * @deprecated
   */
  complexity?: string;
  /**
   * @remarks
   * The content of the CVE.
   * 
   * @example
   * Apache Shiro is a user authentication and authorization framework for a wide range of rights management applications.↵Recently, Apache Shiro released version 1.7.0, which fixes the Apache Shiro authentication bypass vulnerability (CVE-2020-17510).↵Attackers can bypass Shiro\\"s authentication using malicious requests containing payloads.↵↵Related bugs:↵CVE-2020-17510 Shiro < 1.7.0 Validation Bypass Vulnerability↵CVE-2020-13933 Shiro < 1.6.0 Validation Bypass Vulnerability↵CVE-2020-11989 Shiro < 1.5.3 Validation Bypass Vulnerability↵CVE-2020-1957 Shiro < 1.5.2 Validation Bypass Vulnerability↵CVE-2016-6802 Shiro < 1.3.2 Validation Bypass Vulnerability
   * Check whether the fastjson version currently running on the system is in the affected version and whether safeMode is configured to disable autoType. If it is in the affected version and safeMode is not configured to disable autoType, the vulnerability is considered to exist.
   * 
   * @deprecated
   */
  content?: string;
  /**
   * @remarks
   * The CVE ID.
   * 
   * @example
   * CVE-2019-9167
   */
  cveId?: string;
  /**
   * @remarks
   * The link to the CVE vulnerability details.
   * 
   * @example
   * https://avd.aliyun.com/detail/CVE-2022-1184
   */
  cveLink?: string;
  /**
   * @remarks
   * The CVSS score of the vulnerability in the Alibaba Cloud vulnerability database.
   * 
   * @example
   * 10.0
   */
  cvssScore?: string;
  /**
   * @remarks
   * The CVSS score vector.
   * 
   * @example
   * AV:N/AC:L/Au:N/C:C/I:C/A:C
   */
  cvssVector?: string;
  /**
   * @remarks
   * The name of the server instance.
   * > This field is deprecated. To query instances affected by the vulnerability, call [DescribeVulList](~~DescribeVulList~~).
   * 
   * @example
   * sql-test-001
   * 
   * @deprecated
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * > This field is deprecated. To query instances affected by the vulnerability, call [DescribeVulList](~~DescribeVulList~~).
   * 
   * @example
   * 47.114.XX.XX
   * 
   * @deprecated
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * > This field is deprecated. To query instances affected by the vulnerability, call [DescribeVulList](~~DescribeVulList~~).
   * 
   * @example
   * 172.19.XX.XX
   * 
   * @deprecated
   */
  intranetIp?: string;
  /**
   * @remarks
   * The vulnerability ID.
   * 
   * @example
   * CVE-2020-8597
   */
  otherId?: string;
  /**
   * @remarks
   * The content of the POC.
   * 
   * @deprecated
   */
  poc?: string;
  /**
   * @remarks
   * The timestamp when the proof of concept (POC) was created. Unit: milliseconds.
   * 
   * @example
   * 1554189334000
   * 
   * @deprecated
   */
  pocCreateTime?: number;
  /**
   * @remarks
   * The timestamp when the POC was disclosed. Unit: milliseconds.
   * 
   * @example
   * 1554189334000
   * 
   * @deprecated
   */
  pocDisclosureTime?: number;
  /**
   * @remarks
   * The product affected by the vulnerability.
   * 
   * @example
   * Log4j2
   * 
   * @deprecated
   */
  product?: string;
  /**
   * @remarks
   * The reference link for the vulnerability in the Alibaba Cloud vulnerability database.
   * 
   * @example
   * https://example.com
   */
  reference?: string;
  /**
   * @remarks
   * The timestamp when the vulnerability was disclosed in the Alibaba Cloud vulnerability database. Unit: milliseconds.
   * 
   * @example
   * 1554189334000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The remediation suggestion for the vulnerability.
   * 
   * @example
   * <p>At present, Chanjet has urgently released a vulnerability patch to fix the vulnerability. CNVD recommends affected units and users to upgrade to the latest version immediately:</p>↵<p>https://www.chanjetvip.com/product/goods/goods-detail?id=53aaa40295d458e44f5d3ce5</p>↵<p>At the same time, organizations and users affected by the vulnerability are requested to immediately follow the steps below to conduct self-inspection and repair work:</p>↵<ol>↵<li><p>User self-check steps:↵<br  />Check whether website/bin/load.aspx.cdcab7d2.compiled, website/bin/App_Web_load.aspx.cdcab7d2.dll, and tplus/Load.aspx files exist locally. If they exist, it means that they have been poisoned, and you must reinstall the system and install the product. patch.</p>↵</li>↵<li><p>Non-poisoned users please:↵<br  />1) Update the latest product patch.↵<br  />2) Install anti-virus software and update the virus database in time.↵<br  />3) Upgrade the lower version of IIS and Nginx to IIS10.0 and Windows 2016.↵<br  />4) Local installation customers need to confirm whether the backup file is complete as soon as possible, and do off-site backup. Customers on the cloud should enable the mirroring function in time.↵<br  />5) Users who fail to update the patch in time can contact Chanjet technical support and take temporary preventive measures such as deleting files.</p>↵</li>↵<li><p>Poisoned users please:↵<br  />1) Check whether the server has taken regular snapshots or backups. If so, you can restore data through snapshots or backups.↵<br  />2) Contact Chanjet technical support to confirm whether it has the conditions and operation methods to restore data from backup files.</p>↵</li>↵</ol>↵<p>If you have any technical problems, please contact Chanjet technical support: 4006600566-9</p>
   */
  solution?: string;
  /**
   * @remarks
   * The summary of the vulnerability.
   * 
   * @example
   * Chanjet T-Plus is an Internet business management software. There is an unauthorized access vulnerability in one of its interfaces disclosed on the Internet. Attackers can construct malicious requests to upload malicious files to execute arbitrary code and control the server.
   */
  summary?: string;
  /**
   * @remarks
   * The ID of the scan target.
   * > This field is deprecated. To query instances affected by the vulnerability, call [DescribeVulList](~~DescribeVulList~~).
   * 
   * @example
   * m-bp17m0pc0xprzbwo****
   * 
   * @deprecated
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the scan target.
   * > This field is deprecated. To query instances affected by the vulnerability, call [DescribeVulList](~~DescribeVulList~~).
   * 
   * @example
   * frontend
   * 
   * @deprecated
   */
  targetName?: string;
  /**
   * @remarks
   * The title of the vulnerability announcement.
   * 
   * @example
   * Chanjet T-Plus SetupAccount/Upload. Aspx file upload vulnerability(CNVD-2022-60632)
   */
  title?: string;
  /**
   * @remarks
   * The vendor that disclosed the vulnerability.
   * 
   * @example
   * Apache
   * 
   * @deprecated
   */
  vendor?: string;
  /**
   * @remarks
   * The severity level of the vulnerability. Valid values:
   * 
   * - **serious**: critical
   * - **high**: high
   * - **medium**: medium
   * - **low**: low.
   * 
   * @example
   * serious
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      classifys: 'Classifys',
      cnvdId: 'CnvdId',
      complexity: 'Complexity',
      content: 'Content',
      cveId: 'CveId',
      cveLink: 'CveLink',
      cvssScore: 'CvssScore',
      cvssVector: 'CvssVector',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      otherId: 'OtherId',
      poc: 'Poc',
      pocCreateTime: 'PocCreateTime',
      pocDisclosureTime: 'PocDisclosureTime',
      product: 'Product',
      reference: 'Reference',
      releaseTime: 'ReleaseTime',
      solution: 'Solution',
      summary: 'Summary',
      targetId: 'TargetId',
      targetName: 'TargetName',
      title: 'Title',
      vendor: 'Vendor',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      classifys: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCvesClassifys },
      cnvdId: 'string',
      complexity: 'string',
      content: 'string',
      cveId: 'string',
      cveLink: 'string',
      cvssScore: 'string',
      cvssVector: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      otherId: 'string',
      poc: 'string',
      pocCreateTime: 'number',
      pocDisclosureTime: 'number',
      product: 'string',
      reference: 'string',
      releaseTime: 'number',
      solution: 'string',
      summary: 'string',
      targetId: 'string',
      targetName: 'string',
      title: 'string',
      vendor: 'string',
      vulLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.classifys)) {
      $dara.Model.validateArray(this.classifys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of vulnerability details.
   */
  cves?: DescribeVulDetailsResponseBodyCves[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use it to troubleshoot issues.
   * 
   * @example
   * EDA40EA3-6265-5900-AD99-C83E4F109CA8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cves: 'Cves',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cves: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCves },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cves)) {
      $dara.Model.validateArray(this.cves);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

