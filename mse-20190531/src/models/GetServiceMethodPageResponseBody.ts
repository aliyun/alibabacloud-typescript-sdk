// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceMethodPageResponseBodyDataResultParameterDefinitions extends $dara.Model {
  /**
   * @example
   * 参数描述示例
   */
  description?: string;
  /**
   * @example
   * aParam
   */
  name?: string;
  /**
   * @example
   * java.lang.String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * com.alibabacloud.mse.demo.a.AController
   */
  methodController?: string;
  /**
   * @example
   * aMethod
   */
  name?: string;
  /**
   * @example
   * 示例接口描述信息。
   */
  nameDetail?: string;
  parameterDefinitions?: GetServiceMethodPageResponseBodyDataResultParameterDefinitions[];
  parameterDetails?: string[];
  parameterTypes?: string[];
  paths?: string[];
  requestMethods?: string[];
  /**
   * @example
   * java.lang.String
   */
  returnDetails?: string;
  /**
   * @example
   * java.lang.String
   */
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      parameterDetails: 'ParameterDetails',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: { 'type': 'array', 'itemType': GetServiceMethodPageResponseBodyDataResultParameterDefinitions },
      parameterDetails: { 'type': 'array', 'itemType': 'string' },
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      requestMethods: { 'type': 'array', 'itemType': 'string' },
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterDefinitions)) {
      $dara.Model.validateArray(this.parameterDefinitions);
    }
    if(Array.isArray(this.parameterDetails)) {
      $dara.Model.validateArray(this.parameterDetails);
    }
    if(Array.isArray(this.parameterTypes)) {
      $dara.Model.validateArray(this.parameterTypes);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.requestMethods)) {
      $dara.Model.validateArray(this.requestMethods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  result?: GetServiceMethodPageResponseBodyDataResult[];
  /**
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': GetServiceMethodPageResponseBodyDataResult },
      totalSize: 'number',
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

export class GetServiceMethodPageResponseBody extends $dara.Model {
  data?: GetServiceMethodPageResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 2DD5A212-C77B-3XXF-9XXE-XXX9XXXE5XX1
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceMethodPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

