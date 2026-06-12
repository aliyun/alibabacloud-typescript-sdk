// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactRisksResponseBodyArtifactRiskList extends $dara.Model {
  /**
   * @remarks
   * The CVE ID.
   * 
   * @example
   * CVE-2023-4911
   */
  cveNos?: string;
  /**
   * @remarks
   * The extended information in JSON format. Parse this information based on the risk type.
   * 
   * @example
   * {
   *   "feature": "ntpdate", 
   *   "version": "4.2.6", 
   *   "cveLocation": "/usr/lib" 
   * }
   */
  extendInfo?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * - high: High
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The name of the risk.
   * 
   * @example
   * USN-3686-1: file vulnerabilities
   */
  riskName?: string;
  /**
   * @remarks
   * The risk type. Valid values:
   * 
   * - AcrCve: system vulnerabilities in a container image
   * 
   * - AcrSca: application vulnerabilities in a container image
   * 
   * - EcsVulnerability: ECS image vulnerabilities
   * 
   * - EcsAlarm: ECS image security alerts
   * 
   * - EcsBaseline: ECS image baseline checks
   * 
   * @example
   * AcrCve
   */
  riskType?: string;
  /**
   * @remarks
   * The name of the risk type.
   * 
   * @example
   * Container image system vulnerability
   */
  riskTypeName?: string;
  /**
   * @remarks
   * The solution to the risk.
   * 
   * @example
   * apt-get update && apt-get install ntpdate --only-upgrade
   */
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      cveNos: 'CveNos',
      extendInfo: 'ExtendInfo',
      level: 'Level',
      riskName: 'RiskName',
      riskType: 'RiskType',
      riskTypeName: 'RiskTypeName',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveNos: 'string',
      extendInfo: 'string',
      level: 'string',
      riskName: 'string',
      riskType: 'string',
      riskTypeName: 'string',
      solution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactRisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of artifact risks.
   */
  artifactRiskList?: ListArtifactRisksResponseBodyArtifactRiskList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52919DB1-03A0-55F5-BDD4-DB6DEBB8267A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactRiskList: 'ArtifactRiskList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactRiskList: { 'type': 'array', 'itemType': ListArtifactRisksResponseBodyArtifactRiskList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.artifactRiskList)) {
      $dara.Model.validateArray(this.artifactRiskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

