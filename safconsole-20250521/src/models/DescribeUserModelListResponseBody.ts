// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserModelListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Authorization type.
   * 
   * @example
   * READ
   */
  authType?: string;
  /**
   * @remarks
   * Model name.
   * 
   * @example
   * Model_A
   */
  customerModuleName?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * 备注。
   */
  description?: string;
  /**
   * @remarks
   * Associated features.
   * 
   * @example
   * template_a
   */
  featureTemplate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1673578656000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Primary key ID of the model.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Publication status.
   * 
   * @example
   * ONLINE
   */
  innerDefineStatus?: string;
  /**
   * @remarks
   * Model identifier.
   * 
   * @example
   * inner_model_a
   */
  innerModuleName?: string;
  /**
   * @remarks
   * Whether iteration is allowed.
   * 
   * @example
   * true
   */
  isAllowIterate?: boolean;
  /**
   * @remarks
   * Whether rollback is allowed.
   * 
   * @example
   * true
   */
  isAllowRollback?: boolean;
  /**
   * @remarks
   * Iteration version.
   * 
   * @example
   * 1
   */
  iterationVersion?: number;
  /**
   * @remarks
   * Root model ID.
   * 
   * @example
   * 10
   */
  rootModuleId?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      customerModuleName: 'CustomerModuleName',
      description: 'Description',
      featureTemplate: 'FeatureTemplate',
      gmtModified: 'GmtModified',
      id: 'Id',
      innerDefineStatus: 'InnerDefineStatus',
      innerModuleName: 'InnerModuleName',
      isAllowIterate: 'IsAllowIterate',
      isAllowRollback: 'IsAllowRollback',
      iterationVersion: 'IterationVersion',
      rootModuleId: 'RootModuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      customerModuleName: 'string',
      description: 'string',
      featureTemplate: 'string',
      gmtModified: 'number',
      id: 'number',
      innerDefineStatus: 'string',
      innerModuleName: 'string',
      isAllowIterate: 'boolean',
      isAllowRollback: 'boolean',
      iterationVersion: 'number',
      rootModuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserModelListResponseBody extends $dara.Model {
  /**
   * @remarks
   * `code`
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  resultObject?: DescribeUserModelListResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the request was successful, with values as follows:
   * - true, request succeeded
   * - false, request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 1
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      httpStatusCode: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeUserModelListResponseBodyResultObject },
      success: 'boolean',
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

