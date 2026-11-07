// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceMethodPageResponseBodyDataResultParameterDefinitions extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * sample description
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * aParam
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
   * 
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
   * @remarks
   * The full name of the Controller class to which the interface belongs.
   * 
   * @example
   * com.alibabacloud.mse.demo.a.AController
   */
  methodController?: string;
  /**
   * @remarks
   * The name of the method.
   * 
   * @example
   * aMethod
   */
  name?: string;
  /**
   * @remarks
   * The interface description information.
   * 
   * @example
   * sample description
   */
  nameDetail?: string;
  /**
   * @remarks
   * The detailed definition of the parameter.
   */
  parameterDefinitions?: GetServiceMethodPageResponseBodyDataResultParameterDefinitions[];
  /**
   * @remarks
   * The type of the interface parameter.
   */
  parameterDetails?: string[];
  /**
   * @remarks
   * The parameter types.
   */
  parameterTypes?: string[];
  /**
   * @remarks
   * The list of request paths that correspond to the interface.
   */
  paths?: string[];
  /**
   * @remarks
   * The HTTP request method.
   */
  requestMethods?: string[];
  /**
   * @remarks
   * The type of the return value.
   * 
   * @example
   * java.lang.String
   */
  returnDetails?: string;
  /**
   * @remarks
   * The type of the return value.
   * 
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The method description list.
   */
  result?: GetServiceMethodPageResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of methods.
   * 
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
  /**
   * @remarks
   * The response to the request.
   */
  data?: GetServiceMethodPageResponseBodyData;
  /**
   * @remarks
   * The request information.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DD5A212-C77B-3XXF-9XXE-XXX9XXXE5XX1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
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

