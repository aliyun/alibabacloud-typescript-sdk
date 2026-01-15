// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserModelListResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * READ
   */
  authType?: string;
  /**
   * @example
   * Model_A
   */
  customerModuleName?: string;
  description?: string;
  /**
   * @example
   * template_a
   */
  featureTemplate?: string;
  /**
   * @example
   * 1673578656000
   */
  gmtModified?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * ONLINE
   */
  innerDefineStatus?: string;
  /**
   * @example
   * inner_model_a
   */
  innerModuleName?: string;
  /**
   * @example
   * true
   */
  isAllowIterate?: boolean;
  /**
   * @example
   * true
   */
  isAllowRollback?: boolean;
  /**
   * @example
   * 1
   */
  iterationVersion?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  resultObject?: DescribeUserModelListResponseBodyResultObject[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalItem?: number;
  /**
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

