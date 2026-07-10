// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifySearchPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 3203212000XXXX701X
   */
  certNo?: string;
  /**
   * @remarks
   * The certification ID.
   * 
   * @example
   * shadbdd3dbacd001cfa892a5e2b98dxx
   */
  certifyId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  currentPage?: string;
  /**
   * @remarks
   * The query end time. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 2025-10-16 23:59:59 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * Specifies whether there is a device risk. Setting this parameter to true indicates that root = 1, simulator = 1, or virtual_video = 1.
   * 
   * @example
   * true
   */
  hasDeviceRisk?: boolean;
  /**
   * @remarks
   * The liveness detection model.
   * 
   * @example
   * LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * The unique identifier for the customer request.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * Specifies whether the authentication passed:
   * - **T**: Passed.
   * - **F**: Failed.
   * 
   * @example
   * F
   */
  passed?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The business scenario risk:
   * - **0**: No risk.
   * - **1**: Risk detected.
   * 
   * @example
   * 1
   */
  riskBizScenario?: number;
  /**
   * @remarks
   * The device risk:
   * - **0**: No risk.
   * - **1**: Risk detected.
   * 
   * @example
   * 1
   */
  riskDevice?: number;
  /**
   * @remarks
   * The DeviceToken risk:
   * - **0**: No risk.
   * - **1**: Risk detected.
   * 
   * @example
   * 0
   */
  riskDeviceToken?: number;
  /**
   * @remarks
   * The generic risk:
   * - **0**: No risk.
   * - **1**: Risk detected.
   * 
   * @example
   * 1
   */
  riskGeneric?: number;
  /**
   * @remarks
   * The large model mining risk:
   * - **0**: No risk.
   * - **1**: Risk detected.
   * 
   * @example
   * 1
   */
  riskModelMining?: number;
  /**
   * @remarks
   * Specifies whether the device is rooted. Set to 1 if selected; otherwise, do not pass this parameter. This parameter corresponds to the identity tag risk type.
   * 
   * @example
   * 1
   */
  root?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 10000072xx
   */
  sceneId?: string;
  /**
   * @remarks
   * Specifies whether the device is a simulator. Set to 1 if selected; otherwise, do not pass this parameter. This parameter corresponds to the device tag risk type.
   * 
   * @example
   * 1
   */
  simulator?: number;
  /**
   * @remarks
   * The query start time.
   * 
   * @example
   * 2025-10-10 00:00:00 +0800
   */
  startDate?: string;
  /**
   * @remarks
   * The result code. For details, see [SubCode Description](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/error-code-person-verify?spm=a2c4g.11186623.0.0.6015566ebArcFw#d88910e172fgg).
   * 
   * @example
   * 201
   */
  subCode?: string;
  /**
   * @remarks
   * Comma-separated result codes. For details, see [SubCode Description](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/error-code-person-verify?spm=a2c4g.11186623.0.0.6015566ebArcFw#d88910e172fgg).
   * 
   * @example
   * 201,202
   */
  subCodes?: string;
  /**
   * @remarks
   * Specifies whether virtual video is used. Set to 1 if selected; otherwise, do not pass this parameter. This parameter corresponds to the behavior tag risk type.
   * 
   * @example
   * 1
   */
  virtualVideo?: number;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      hasDeviceRisk: 'HasDeviceRisk',
      model: 'Model',
      outerOrderNo: 'OuterOrderNo',
      pageSize: 'PageSize',
      passed: 'Passed',
      productCode: 'ProductCode',
      riskBizScenario: 'RiskBizScenario',
      riskDevice: 'RiskDevice',
      riskDeviceToken: 'RiskDeviceToken',
      riskGeneric: 'RiskGeneric',
      riskModelMining: 'RiskModelMining',
      root: 'Root',
      sceneId: 'SceneId',
      simulator: 'Simulator',
      startDate: 'StartDate',
      subCode: 'SubCode',
      subCodes: 'SubCodes',
      virtualVideo: 'VirtualVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      currentPage: 'string',
      endDate: 'string',
      hasDeviceRisk: 'boolean',
      model: 'string',
      outerOrderNo: 'string',
      pageSize: 'string',
      passed: 'string',
      productCode: 'string',
      riskBizScenario: 'number',
      riskDevice: 'number',
      riskDeviceToken: 'number',
      riskGeneric: 'number',
      riskModelMining: 'number',
      root: 'number',
      sceneId: 'string',
      simulator: 'number',
      startDate: 'string',
      subCode: 'string',
      subCodes: 'string',
      virtualVideo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

