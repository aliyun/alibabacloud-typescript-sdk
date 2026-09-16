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
   * The authentication ID.
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
   * The end time of the query. Format: YYYY-MM-DD HH:mm:ss, such as 2025-10-16 23:59:59.
   * 
   * @example
   * 2025-10-16 23:59:59
   */
  endDate?: string;
  /**
   * @remarks
   * Specifies whether device risk exists. Set this parameter to true to indicate root = 1, simulator = 1, or virtual_video = 1.
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
   * The unique identifier of the customer request.
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
   * Indicates whether the authentication is passed. Valid values:
   * - **T**: Passed.
   * - **F**: Not passed.
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
   * The business scenario risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskBizScenario?: number;
  /**
   * @remarks
   * The device risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskDevice?: number;
  /**
   * @remarks
   * The DeviceToken risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 0
   */
  riskDeviceToken?: number;
  /**
   * @remarks
   * The generic risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskGeneric?: number;
  /**
   * @remarks
   * The large model mining risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskModelMining?: number;
  /**
   * @remarks
   * Specifies whether the device is rooted. Set this parameter to 1 if selected. Otherwise, do not pass this parameter. This corresponds to the identity tag risk type.
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
   * Specifies whether the device is a simulator. Set this parameter to 1 if selected. Otherwise, do not pass this parameter. This corresponds to the device tag risk type.
   * 
   * @example
   * 1
   */
  simulator?: number;
  /**
   * @remarks
   * The start time of the query. Format: YYYY-MM-DD HH:mm:ss, such as 2025-10-10 00:00:00.
   * 
   * @example
   * 2025-10-10 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The result code. For more information about valid values, see [SubCode description](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/error-code-person-verify#d88910e172fgg).
   * 
   * @example
   * 201
   */
  subCode?: string;
  /**
   * @remarks
   * Comma-separated result codes. For more information about valid values, see [SubCode description](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/error-code-person-verify#d88910e172fgg).
   * 
   * @example
   * 201,202
   */
  subCodes?: string;
  /**
   * @remarks
   * Specifies whether virtual video adaptation is used. Set this parameter to 1 if selected. Otherwise, do not pass this parameter. This corresponds to the behavior tag risk type.
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

