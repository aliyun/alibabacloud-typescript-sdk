// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedDevReturnParameters extends $dara.Model {
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * example1
   */
  exampleValue?: string;
  /**
   * @remarks
   * The authorization status of the field.
   * 
   * @example
   * 1
   */
  isAuthorized?: number;
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * description1
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param1
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      isAuthorized: 'IsAuthorized',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      isAuthorized: 'number',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedProdReturnParameters extends $dara.Model {
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * example1
   */
  exampleValue?: string;
  /**
   * @remarks
   * The authorization status of the field.
   * 
   * @example
   * 1
   */
  isAuthorized?: number;
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * description1
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param1
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      isAuthorized: 'IsAuthorized',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      isAuthorized: 'number',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedDataServiceApiDetailsResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * API_ID
   * 
   * @example
   * 12345
   */
  apiId?: number;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * GetData
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @remarks
   * The type of the permission.
   * 
   * @example
   * Usage permission
   */
  authType?: string;
  /**
   * @remarks
   * The list of authorized fields for the API in the development environment.
   */
  authorizedDevReturnParameters?: ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedDevReturnParameters[];
  /**
   * @remarks
   * The list of authorized fields for the API in the production environment.
   */
  authorizedProdReturnParameters?: ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedProdReturnParameters[];
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Description1
   */
  description?: string;
  /**
   * @remarks
   * The validity period of API permissions in the development environment.
   * 
   * @example
   * 2035-12-31
   */
  devAuthPeriod?: string;
  /**
   * @remarks
   * The validity period of API permissions in the production environment.
   * 
   * @example
   * 2035-12-31
   */
  prodAuthPeriod?: string;
  /**
   * @remarks
   * The ID of the data service project.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appId: 'AppId',
      authType: 'AuthType',
      authorizedDevReturnParameters: 'AuthorizedDevReturnParameters',
      authorizedProdReturnParameters: 'AuthorizedProdReturnParameters',
      description: 'Description',
      devAuthPeriod: 'DevAuthPeriod',
      prodAuthPeriod: 'ProdAuthPeriod',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      appId: 'number',
      authType: 'string',
      authorizedDevReturnParameters: { 'type': 'array', 'itemType': ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedDevReturnParameters },
      authorizedProdReturnParameters: { 'type': 'array', 'itemType': ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedProdReturnParameters },
      description: 'string',
      devAuthPeriod: 'string',
      prodAuthPeriod: 'string',
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedDevReturnParameters)) {
      $dara.Model.validateArray(this.authorizedDevReturnParameters);
    }
    if(Array.isArray(this.authorizedProdReturnParameters)) {
      $dara.Model.validateArray(this.authorizedProdReturnParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedDataServiceApiDetailsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of authorized API details.
   */
  data?: ListAuthorizedDataServiceApiDetailsResponseBodyResultData[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAuthorizedDataServiceApiDetailsResponseBodyResultData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedDataServiceApiDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid parameter
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * The query result.
   */
  result?: ListAuthorizedDataServiceApiDetailsResponseBodyResult;
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ListAuthorizedDataServiceApiDetailsResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

