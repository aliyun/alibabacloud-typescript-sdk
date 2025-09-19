// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfoBaseline extends $dara.Model {
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * f28ecca63bfaf22ead4b28b63d752a21e4d2c1de90b8549fbde880d619f3****
   */
  digest?: string;
  /**
   * @remarks
   * The number of baseline risks detected on the image repository.
   * 
   * @example
   * 1
   */
  hcCount?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * 7c5ad02865aef575387a05bb3c81b27e0d8ed1f2e3f722ea05523b72882f****
   */
  imageId?: string;
  /**
   * @remarks
   * The image size.
   * 
   * @example
   * 1024
   */
  imageSize?: number;
  /**
   * @remarks
   * The name of the Container Registry repository.
   * 
   * @example
   * glz123
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the repository belongs.
   * 
   * @example
   * namespace-01
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The risk statistics of all hosts, images, and containers.
   * 
   * @example
   * {\\"account\\":0,\\"agentlessAll\\":0,\\"agentlessBaseline\\":0,\\"agentlessMalicious\\":0,\\"agentlessSensitiveFile\\":0,\\"agentlessVulCve\\":0,\\"agentlessVulSca\\":0,\\"agentlessVulSys\\":0,\\"appNum\\":0,\\"asapVulCount\\":0,\\"baselineHigh\\":0,\\"baselineLow\\":0,\\"baselineMedium\\":0,\\"baselineNum\\":0,\\"cmsNum\\":0,\\"containerAsap\\":0,\\"containerLater\\":0,\\"containerNntf\\":0,\\"containerRemind\\":0,\\"containerSerious\\":0,\\"containerSuspicious\\":0,\\"cveNum\\":0,\\"emgNum\\":0,\\"health\\":0,\\"imageBaselineHigh\\":1,\\"imageBaselineLow\\":0,\\"imageBaselineMedium\\":0,\\"imageBaselineNum\\":1,\\"imageMaliciousFileRemind\\":0,\\"imageMaliciousFileSerious\\":0,\\"imageMaliciousFileSuspicious\\":0,\\"imageVulAsap\\":0,\\"imageVulLater\\":0,\\"imageVulNntf\\":0,\\"laterVulCount\\":0,\\"newSuspicious\\":0,\\"nntfVulCount\\":0,\\"remindNum\\":0,\\"scaNum\\":0,\\"seriousNum\\":0,\\"suspNum\\":0,\\"suspicious\\":0,\\"sysNum\\":0,\\"trojan\\":0,\\"uuid\\":\\"009635bf00c0585e3122ab92f5449919\\",\\"vul\\":0,\\"weakPWNum\\":0}
   */
  riskLevelDetail?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * machineResource
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the record.
   * 
   * @example
   * 5583aa03-922e-4709-a888-389f2489****
   */
  uuid?: string;
  /**
   * @remarks
   * The number of detected vulnerabilities.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      hcCount: 'HcCount',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      riskLevelDetail: 'RiskLevelDetail',
      tag: 'Tag',
      uuid: 'Uuid',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      hcCount: 'number',
      imageId: 'string',
      imageSize: 'number',
      repoName: 'string',
      repoNamespace: 'string',
      riskLevelDetail: 'string',
      tag: 'string',
      uuid: 'string',
      vulCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfoVulAsap extends $dara.Model {
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * d97c1348e56eb52902888e6e5673623321b1f19ac45ed532c3114dc0f989****
   */
  digest?: string;
  /**
   * @remarks
   * The number of risks detected on the image repository.
   * 
   * @example
   * 0
   */
  hcCount?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * fabe4203a89765a2c99554040bda51eac7885a18216f4ac0be82710cff60****
   */
  imageId?: string;
  /**
   * @remarks
   * The image size.
   * 
   * @example
   * 1024
   */
  imageSize?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * lkl-zf-ss-ordapi-labs
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * namespace-01
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The risk statistics of all hosts, images, and containers.
   * 
   * @example
   * {\\"account\\":0,\\"agentlessAll\\":0,\\"agentlessBaseline\\":0,\\"agentlessMalicious\\":0,\\"agentlessSensitiveFile\\":0,\\"agentlessVulCve\\":0,\\"agentlessVulSca\\":0,\\"agentlessVulSys\\":0,\\"appNum\\":0,\\"asapVulCount\\":0,\\"baselineHigh\\":0,\\"baselineLow\\":0,\\"baselineMedium\\":0,\\"baselineNum\\":0,\\"cmsNum\\":0,\\"containerAsap\\":0,\\"containerLater\\":0,\\"containerNntf\\":0,\\"containerRemind\\":0,\\"containerSerious\\":0,\\"containerSuspicious\\":0,\\"cveNum\\":513,\\"emgNum\\":0,\\"health\\":0,\\"imageBaselineHigh\\":0,\\"imageBaselineLow\\":0,\\"imageBaselineMedium\\":0,\\"imageBaselineNum\\":0,\\"imageMaliciousFileRemind\\":0,\\"imageMaliciousFileSerious\\":0,\\"imageMaliciousFileSuspicious\\":0,\\"imageVulAsap\\":3,\\"imageVulLater\\":182,\\"imageVulNntf\\":328,\\"laterVulCount\\":0,\\"newSuspicious\\":0,\\"nntfVulCount\\":0,\\"remindNum\\":0,\\"scaNum\\":0,\\"seriousNum\\":0,\\"suspNum\\":0,\\"suspicious\\":0,\\"sysNum\\":0,\\"trojan\\":0,\\"uuid\\":\\"44ffb29d6f66d8509598bcdfa660a21d\\",\\"vul\\":513,\\"weakPWNum\\":0}
   */
  riskLevelDetail?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * app:app01-ubuntu
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the record.
   * 
   * @example
   * 6636c286-8063-4c97-8508-6aaf16a8****
   */
  uuid?: string;
  /**
   * @remarks
   * The number of vulnerabilities.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      hcCount: 'HcCount',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      riskLevelDetail: 'RiskLevelDetail',
      tag: 'Tag',
      uuid: 'Uuid',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      hcCount: 'number',
      imageId: 'string',
      imageSize: 'number',
      repoName: 'string',
      repoNamespace: 'string',
      riskLevelDetail: 'string',
      tag: 'string',
      uuid: 'string',
      vulCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfo extends $dara.Model {
  /**
   * @remarks
   * The baseline risks.
   */
  baseline?: GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfoBaseline[];
  /**
   * @remarks
   * The risk information of high-risk vulnerabilities.
   */
  vulAsap?: GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfoVulAsap[];
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      vulAsap: 'VulAsap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: { 'type': 'array', 'itemType': GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfoBaseline },
      vulAsap: { 'type': 'array', 'itemType': GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfoVulAsap },
    };
  }

  validate() {
    if(Array.isArray(this.baseline)) {
      $dara.Model.validateArray(this.baseline);
    }
    if(Array.isArray(this.vulAsap)) {
      $dara.Model.validateArray(this.vulAsap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDockerhubImageRiskRankInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30CBF632-109F-596F-97F2-451C8B2A****
   */
  requestId?: string;
  /**
   * @remarks
   * The risk information.
   */
  riskRankInfo?: GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskRankInfo: 'RiskRankInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskRankInfo: GetDockerhubImageRiskRankInfoResponseBodyRiskRankInfo,
    };
  }

  validate() {
    if(this.riskRankInfo && typeof (this.riskRankInfo as any).validate === 'function') {
      (this.riskRankInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

