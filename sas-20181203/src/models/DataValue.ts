// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
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
   * The total number of system vulnerability items.
   * 
   * @example
   * 1
   */
  cveVulCount?: number;
  /**
   * @remarks
   * The estimated detection volume in GB. This field is not currently returned by the batch statistics operation.
   * 
   * @example
   * 10
   */
  estimateUsedSize?: number;
  /**
   * @remarks
   * The timestamp of the last scan time, in milliseconds.
   * 
   * @example
   * 1682577532318
   */
  lastTaskTime?: number;
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
   * The number of vulnerable servers.
   * 
   * @example
   * 1
   */
  riskMachine?: number;
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
   * The number of scanned servers.
   * 
   * @example
   * 1
   */
  scanMachine?: number;
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
   * The total number of Windows system vulnerability items.
   * 
   * @example
   * 1
   */
  sysVulCount?: number;
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
      baselineCheckCount: 'BaselineCheckCount',
      cveVulCount: 'CveVulCount',
      estimateUsedSize: 'EstimateUsedSize',
      lastTaskTime: 'LastTaskTime',
      maliciousFile: 'MaliciousFile',
      riskMachine: 'RiskMachine',
      scaVulCount: 'ScaVulCount',
      scanMachine: 'ScanMachine',
      sensitiveFileCount: 'SensitiveFileCount',
      sysVulCount: 'SysVulCount',
      vulnerability: 'Vulnerability',
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
      baselineCheckCount: 'number',
      cveVulCount: 'number',
      estimateUsedSize: 'number',
      lastTaskTime: 'number',
      maliciousFile: 'number',
      riskMachine: 'number',
      scaVulCount: 'number',
      scanMachine: 'number',
      sensitiveFileCount: 'number',
      sysVulCount: 'number',
      vulnerability: 'number',
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

