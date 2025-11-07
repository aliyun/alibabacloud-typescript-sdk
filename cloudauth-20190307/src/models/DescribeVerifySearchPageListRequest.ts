// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifySearchPageListRequest extends $dara.Model {
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 3203212000XXXX701X
   */
  certNo?: string;
  /**
   * @remarks
   * Authentication ID.
   * 
   * @example
   * shadbdd3dbacd001cfa892a5e2b98dxx
   */
  certifyId?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  currentPage?: string;
  /**
   * @remarks
   * End date of the query. The format is a Unix timestamp, in milliseconds.
   * 
   * @example
   * 2025-10-16 23:59:59 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * Whether there is device risk (pass true if root = 1 or simulator = 1 or virtual_video = 1).
   * 
   * @example
   * true
   */
  hasDeviceRisk?: boolean;
  /**
   * @remarks
   * Liveness detection model.
   * 
   * @example
   * LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * Unique identifier for the customer request.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * Whether the authentication passed:
   * - **T**: Passed
   * - **F**: Not passed
   * 
   * @example
   * F
   */
  passed?: string;
  /**
   * @remarks
   * Product code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Whether it is rooted (pass 1 if selected, otherwise do not pass; corresponds to identity label risk type).
   * 
   * @example
   * 1
   */
  root?: number;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 10000072xx
   */
  sceneId?: string;
  /**
   * @remarks
   * Whether it is a simulator (pass 1 if selected, otherwise do not pass; corresponds to device label risk type).
   * 
   * @example
   * 1
   */
  simulator?: number;
  /**
   * @remarks
   * Start date of the query.
   * 
   * @example
   * 2025-10-10 00:00:00 +0800
   */
  startDate?: string;
  /**
   * @remarks
   * Result Code. For detailed values, please refer to: [SubCode Explanation](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/error-code-person-verify?spm=a2c4g.11186623.0.0.6015566ebArcFw#d88910e172fgg).
   * 
   * @example
   * 201
   */
  subCode?: string;
  /**
   * @remarks
   * Comma-separated Result Codes. For detailed values, please refer to: [SubCode Explanation](https://help.aliyun.com/zh/id-verification/financial-grade-id-verification/error-code-person-verify?spm=a2c4g.11186623.0.0.6015566ebArcFw#d88910e172fgg).
   * 
   * @example
   * 201,202
   */
  subCodes?: string;
  /**
   * @remarks
   * Whether it is a virtual adaptation (pass 1 if selected, otherwise do not pass; corresponds to behavior label risk type).
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

