// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIAssetSummaryResponseBodyDataSensitiveSummary extends $dara.Model {
  /**
   * @remarks
   * The number of images that have AI-related keys are stored in plaintext detected by image scan.
   * 
   * @example
   * 1
   */
  containerImageCnt?: number;
  /**
   * @remarks
   * The number of servers that have AI-related keys are stored in plaintext detected by agentless scan.
   * 
   * @example
   * 1
   */
  ecsCnt?: number;
  /**
   * @remarks
   * The number of images that have AI-related keys are stored in plaintext detected by agentless scan.
   * 
   * @example
   * 3
   */
  imageCnt?: number;
  /**
   * @remarks
   * The number of snapshots that have AI-related keys are stored in plaintext detected by agentless scan.
   * 
   * @example
   * 4
   */
  snapshotCnt?: number;
  /**
   * @remarks
   * The total number of assets that have AI-related keys are stored in plaintext.
   * 
   * @example
   * 9
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      containerImageCnt: 'ContainerImageCnt',
      ecsCnt: 'EcsCnt',
      imageCnt: 'ImageCnt',
      snapshotCnt: 'SnapshotCnt',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageCnt: 'number',
      ecsCnt: 'number',
      imageCnt: 'number',
      snapshotCnt: 'number',
      totalCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIAssetSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of cloud assets with AI security posture management risks.
   * 
   * @example
   * 15
   */
  aispmRiskAssetCnt?: number;
  /**
   * @remarks
   * The number of servers on which AI components are installed.
   * 
   * @example
   * 2
   */
  ecsAssetCnt?: number;
  /**
   * @remarks
   * The number of servers that have exposed AI components.
   * 
   * @example
   * 0
   */
  exposedRiskAssetCnt?: number;
  /**
   * @remarks
   * The number of AI images.
   * 
   * @example
   * 2
   */
  imageAssetCnt?: number;
  /**
   * @remarks
   * The number of LINGJUN assets.
   * 
   * @example
   * 0
   */
  lingjunAssetCnt?: number;
  /**
   * @remarks
   * The number of container image assets in PAI.
   * 
   * @example
   * 2
   */
  paiContainerCnt?: number;
  /**
   * @remarks
   * The total number of cloud asset instances in Platform for AI (PAI).
   * 
   * @example
   * 17
   */
  paiInstanceCnt?: number;
  /**
   * @remarks
   * The number of serverless assets in PAI.
   * 
   * @example
   * 0
   */
  paiServerlessAssetCnt?: number;
  /**
   * @remarks
   * The statistics on assets that have AI-related keys are stored in plaintext.
   */
  sensitiveSummary?: DescribeAIAssetSummaryResponseBodyDataSensitiveSummary;
  /**
   * @remarks
   * The number of AI snapshots.
   * 
   * @example
   * 2
   */
  snapshotAssetCnt?: number;
  /**
   * @remarks
   * The total number of AI assets.
   * 
   * @example
   * 25
   */
  totalAssetCnt?: number;
  /**
   * @remarks
   * The total number of assets with AI risks.
   * 
   * @example
   * 26
   */
  totalRiskCnt?: number;
  /**
   * @remarks
   * The number of servers with AI application vulnerabilities.
   * 
   * @example
   * 2
   */
  vulRiskAssetCnt?: number;
  static names(): { [key: string]: string } {
    return {
      aispmRiskAssetCnt: 'AispmRiskAssetCnt',
      ecsAssetCnt: 'EcsAssetCnt',
      exposedRiskAssetCnt: 'ExposedRiskAssetCnt',
      imageAssetCnt: 'ImageAssetCnt',
      lingjunAssetCnt: 'LingjunAssetCnt',
      paiContainerCnt: 'PaiContainerCnt',
      paiInstanceCnt: 'PaiInstanceCnt',
      paiServerlessAssetCnt: 'PaiServerlessAssetCnt',
      sensitiveSummary: 'SensitiveSummary',
      snapshotAssetCnt: 'SnapshotAssetCnt',
      totalAssetCnt: 'TotalAssetCnt',
      totalRiskCnt: 'TotalRiskCnt',
      vulRiskAssetCnt: 'VulRiskAssetCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aispmRiskAssetCnt: 'number',
      ecsAssetCnt: 'number',
      exposedRiskAssetCnt: 'number',
      imageAssetCnt: 'number',
      lingjunAssetCnt: 'number',
      paiContainerCnt: 'number',
      paiInstanceCnt: 'number',
      paiServerlessAssetCnt: 'number',
      sensitiveSummary: DescribeAIAssetSummaryResponseBodyDataSensitiveSummary,
      snapshotAssetCnt: 'number',
      totalAssetCnt: 'number',
      totalRiskCnt: 'number',
      vulRiskAssetCnt: 'number',
    };
  }

  validate() {
    if(this.sensitiveSummary && typeof (this.sensitiveSummary as any).validate === 'function') {
      (this.sensitiveSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIAssetSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeAIAssetSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAIAssetSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

