// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentlessTaskCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of baseline checks.
   * 
   * @example
   * 1
   */
  baselineCheckCount?: number;
  /**
   * @remarks
   * The number of system vulnerabilities.
   * 
   * @example
   * 1
   */
  cveVulCount?: number;
  /**
   * @remarks
   * The timestamp generated when the last detection is performed.
   * 
   * @example
   * 1682577532318
   */
  lastTaskTime?: number;
  /**
   * @remarks
   * The number of malicious files.
   * 
   * @example
   * 1
   */
  maliciousFile?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
   */
  requestId?: string;
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
   * The number of application vulnerabilities.
   * 
   * @example
   * 1
   */
  scaVulCount?: number;
  /**
   * @remarks
   * The number of hosts that are scanned.
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
   * The total number of Windows system vulnerabilities.
   * 
   * @example
   * 1
   */
  sysVulCount?: string;
  /**
   * @remarks
   * The number of vulnerabilities.
   * 
   * @example
   * 1
   */
  vulnerability?: number;
  static names(): { [key: string]: string } {
    return {
      baselineCheckCount: 'BaselineCheckCount',
      cveVulCount: 'CveVulCount',
      lastTaskTime: 'LastTaskTime',
      maliciousFile: 'MaliciousFile',
      requestId: 'RequestId',
      riskMachine: 'RiskMachine',
      scaVulCount: 'ScaVulCount',
      scanMachine: 'ScanMachine',
      sensitiveFileCount: 'SensitiveFileCount',
      sysVulCount: 'SysVulCount',
      vulnerability: 'Vulnerability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineCheckCount: 'number',
      cveVulCount: 'number',
      lastTaskTime: 'number',
      maliciousFile: 'number',
      requestId: 'string',
      riskMachine: 'number',
      scaVulCount: 'number',
      scanMachine: 'number',
      sensitiveFileCount: 'number',
      sysVulCount: 'string',
      vulnerability: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

