// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
  /**
   * @remarks
   * The number of risky hosts.
   * 
   * @example
   * 1
   */
  riskMachine?: number;
  /**
   * @remarks
   * The number of scanned hosts.
   * 
   * @example
   * 1
   */
  scanMachine?: number;
  /**
   * @remarks
   * The total number of malicious sample files.
   * 
   * @example
   * 1
   */
  maliciousFile?: number;
  /**
   * @remarks
   * The number of vulnerability risks.
   * 
   * @example
   * 1
   */
  vulnerability?: number;
  /**
   * @remarks
   * The timestamp of the last scan time. Unit: milliseconds.
   * 
   * @example
   * 1682577532318
   */
  lastTaskTime?: number;
  /**
   * @remarks
   * The total number of baseline check items.
   * 
   * @example
   * 1
   */
  baselineCheckCount?: number;
  /**
   * @remarks
   * The total number of application vulnerabilities.
   * 
   * @example
   * 1
   */
  scaVulCount?: number;
  /**
   * @remarks
   * The total number of system vulnerabilities.
   * 
   * @example
   * 1
   */
  cveVulCount?: number;
  /**
   * @remarks
   * The total number of Windows system vulnerabilities.
   * 
   * @example
   * 1
   */
  sysVulCount?: number;
  /**
   * @remarks
   * The total number of sensitive files.
   * 
   * @example
   * 1
   */
  sensitiveFileCount?: number;
  /**
   * @remarks
   * The estimated detection volume. Unit: GB. This field is not returned by the batch statistics operation.
   * 
   * @example
   * 10
   */
  estimateUsedSize?: number;
  /**
   * @remarks
   * The number of Linux software vulnerabilities.
   * 
   * @example
   * 1
   */
  cveNum?: number;
  /**
   * @remarks
   * The number of emergency vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  emgNum?: number;
  /**
   * @remarks
   * The number of Windows system vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  sysNum?: number;
  /**
   * @remarks
   * The number of Web-CMS vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  cmsNum?: number;
  /**
   * @remarks
   * The number of application vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  appNum?: number;
  /**
   * @remarks
   * The number of software composition analysis (SCA) vulnerabilities.
   * 
   * @example
   * 2
   */
  scaNum?: number;
  /**
   * @remarks
   * The number of high-priority vulnerabilities.
   * 
   * @example
   * 1
   */
  vulAsapSum?: number;
  /**
   * @remarks
   * The number of medium-priority vulnerabilities.
   * 
   * @example
   * 1
   */
  vulLaterSum?: number;
  /**
   * @remarks
   * The number of low-priority vulnerabilities.
   * 
   * @example
   * 1
   */
  vulNntfSum?: number;
  /**
   * @remarks
   * The number of high-priority system vulnerabilities among Linux software vulnerabilities and Windows system vulnerabilities.
   * 
   * @example
   * 1
   */
  sysAsapNum?: number;
  static names(): { [key: string]: string } {
    return {
      riskMachine: 'RiskMachine',
      scanMachine: 'ScanMachine',
      maliciousFile: 'MaliciousFile',
      vulnerability: 'Vulnerability',
      lastTaskTime: 'LastTaskTime',
      baselineCheckCount: 'BaselineCheckCount',
      scaVulCount: 'ScaVulCount',
      cveVulCount: 'CveVulCount',
      sysVulCount: 'SysVulCount',
      sensitiveFileCount: 'SensitiveFileCount',
      estimateUsedSize: 'EstimateUsedSize',
      cveNum: 'CveNum',
      emgNum: 'EmgNum',
      sysNum: 'SysNum',
      cmsNum: 'CmsNum',
      appNum: 'AppNum',
      scaNum: 'ScaNum',
      vulAsapSum: 'VulAsapSum',
      vulLaterSum: 'VulLaterSum',
      vulNntfSum: 'VulNntfSum',
      sysAsapNum: 'SysAsapNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskMachine: 'number',
      scanMachine: 'number',
      maliciousFile: 'number',
      vulnerability: 'number',
      lastTaskTime: 'number',
      baselineCheckCount: 'number',
      scaVulCount: 'number',
      cveVulCount: 'number',
      sysVulCount: 'number',
      sensitiveFileCount: 'number',
      estimateUsedSize: 'number',
      cveNum: 'number',
      emgNum: 'number',
      sysNum: 'number',
      cmsNum: 'number',
      appNum: 'number',
      scaNum: 'number',
      vulAsapSum: 'number',
      vulLaterSum: 'number',
      vulNntfSum: 'number',
      sysAsapNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

