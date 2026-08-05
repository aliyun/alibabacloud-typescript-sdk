// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionInstancesResponseBodyResultBelongs extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * ""
   */
  category?: string;
  /**
   * @remarks
   * The industry type.
   * 
   * @example
   * ""
   */
  domain?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - zh_CN: Chinese (default)
   * - en_US: English.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      domain: 'domain',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      domain: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBodyResultCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ownership information.
   */
  belongs?: ListFunctionInstancesResponseBodyResultBelongs;
  /**
   * @remarks
   * The creation parameter body.
   */
  createParameters?: ListFunctionInstancesResponseBodyResultCreateParameters[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1713352442039
   */
  createTime?: number;
  /**
   * @remarks
   * The cron expression for the timed scheduling node.
   * 
   * @example
   * ""
   */
  cron?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * ""
   */
  extendInfo?: string;
  /**
   * @remarks
   * The configuration item.
   * 
   * @example
   * nl2sql
   */
  functionName?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The configuration name.
   * 
   * @example
   * a_test
   */
  instanceName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * ops-query-analyze-001
   */
  modelType?: string;
  /**
   * @remarks
   * The instance source. Valid values:
   * - builtin: system instance
   * - user: user instance (default)
   * - all: all instances.
   * 
   * @example
   * all
   */
  source?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - available
   * - unavailable.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * usageParameters
   */
  usageParameters?: { [key: string]: any }[];
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      belongs: 'belongs',
      createParameters: 'createParameters',
      createTime: 'createTime',
      cron: 'cron',
      description: 'description',
      extendInfo: 'extendInfo',
      functionName: 'functionName',
      functionType: 'functionType',
      instanceName: 'instanceName',
      modelType: 'modelType',
      source: 'source',
      status: 'status',
      usageParameters: 'usageParameters',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongs: ListFunctionInstancesResponseBodyResultBelongs,
      createParameters: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResultCreateParameters },
      createTime: 'number',
      cron: 'string',
      description: 'string',
      extendInfo: 'string',
      functionName: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
      source: 'string',
      status: 'string',
      usageParameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      versionId: 'number',
    };
  }

  validate() {
    if(this.belongs && typeof (this.belongs as any).validate === 'function') {
      (this.belongs as any).validate();
    }
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
    }
    if(Array.isArray(this.usageParameters)) {
      $dara.Model.validateArray(this.usageParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * not found
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The elapsed time.
   * 
   * @example
   * 39.108
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "xx not found"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33E4F0CA-F766-5803-B11C-70DC57A5A6E4
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListFunctionInstancesResponseBodyResult[];
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      latency: 'latency',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      status: 'status',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResult },
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

