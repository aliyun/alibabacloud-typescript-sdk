// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceMethodPageResponseBodyDataResultReturnDefinition extends $dara.Model {
  /**
   * @remarks
   * The ID of the return value.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The data format of the response.
   * 
   * @example
   * java.lang.String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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
   * The method.
   * 
   * @example
   * com.aliware.edas.EchoController
   */
  methodController?: string;
  /**
   * @remarks
   * The name of the method.
   * 
   * @example
   * echo
   */
  name?: string;
  /**
   * @remarks
   * The details of the method.
   * 
   * @example
   * name
   */
  nameDetail?: string;
  /**
   * @remarks
   * The definition of the parameter.
   * 
   * @example
   * [{"description":"","name":"arg0","type":"java.lang.String"}]
   */
  parameterDefinitions?: string;
  /**
   * @remarks
   * The details of the parameters.
   * 
   * @example
   * {}
   */
  parameterDetails?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * echo
   */
  parameterNames?: string;
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * java.lang.String
   */
  parameterTypes?: string;
  /**
   * @remarks
   * The method path.
   * 
   * @example
   * /consumer/alive
   */
  paths?: string;
  /**
   * @remarks
   * The request method.
   * 
   * @example
   * GET
   */
  requestMethods?: string;
  /**
   * @remarks
   * The return value.
   */
  returnDefinition?: GetServiceMethodPageResponseBodyDataResultReturnDefinition;
  /**
   * @remarks
   * The details of the response.
   * 
   * @example
   * java.lang.String
   */
  returnDetails?: string;
  /**
   * @remarks
   * The data format of the response.
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
      parameterNames: 'ParameterNames',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDefinition: 'ReturnDefinition',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: 'string',
      parameterDetails: 'string',
      parameterNames: 'string',
      parameterTypes: 'string',
      paths: 'string',
      requestMethods: 'string',
      returnDefinition: GetServiceMethodPageResponseBodyDataResultReturnDefinition,
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  validate() {
    if(this.returnDefinition && typeof (this.returnDefinition as any).validate === 'function') {
      (this.returnDefinition as any).validate();
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data about the method.
   */
  result?: GetServiceMethodPageResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
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
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: GetServiceMethodPageResponseBodyData;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDC0C0FE-D63B-4FC8-****-4081C57E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetServiceMethodPageResponseBodyData,
      httpCode: 'string',
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

