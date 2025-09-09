// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactRisksResponseBodyArtifactRiskList extends $dara.Model {
  /**
   * @remarks
   * CVE numbers
   * 
   * @example
   * CVE-2023-4911
   */
  cveNos?: string;
  /**
   * @remarks
   * Extended information, in JSON format, to be parsed according to the risk category
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
   * Risk level:
   * 
   * - high represents high
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * Risk name.
   * 
   * @example
   * USN-3686-1: file vulnerabilities
   */
  riskName?: string;
  /**
   * @remarks
   * Risk type. Values:
   * - AcrCve  Container image system vulnerability
   * - AcrSca  Container image application vulnerability
   * - EcsVulnerability  ECS image vulnerability information
   * - EcsAlarm  ECS image security alarm
   * - EcsBaseline  ECS image baseline check
   * 
   * @example
   * AcrCve
   */
  riskType?: string;
  /**
   * @remarks
   * Risk Type name
   * 
   * @example
   * Container System Vulner
   */
  riskTypeName?: string;
  /**
   * @remarks
   * Solution for the risk item.
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
   * List of artifact risks
   */
  artifactRiskList?: ListArtifactRisksResponseBodyArtifactRiskList[];
  /**
   * @remarks
   * Request ID.
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

