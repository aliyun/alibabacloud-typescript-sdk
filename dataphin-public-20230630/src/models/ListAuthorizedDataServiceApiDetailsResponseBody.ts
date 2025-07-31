// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedDevReturnParameters extends $dara.Model {
  /**
   * @example
   * example1
   */
  exampleValue?: string;
  /**
   * @example
   * 1
   */
  isAuthorized?: number;
  /**
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @example
   * description1
   */
  parameterDescription?: string;
  /**
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
   * @example
   * example1
   */
  exampleValue?: string;
  /**
   * @example
   * 1
   */
  isAuthorized?: number;
  /**
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @example
   * description1
   */
  parameterDescription?: string;
  /**
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
   * @example
   * GetData
   */
  apiName?: string;
  /**
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @example
   * 使用权限
   */
  authType?: string;
  authorizedDevReturnParameters?: ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedDevReturnParameters[];
  authorizedProdReturnParameters?: ListAuthorizedDataServiceApiDetailsResponseBodyResultDataAuthorizedProdReturnParameters[];
  /**
   * @example
   * Description1
   */
  description?: string;
  /**
   * @example
   * 2035-12-31
   */
  devAuthPeriod?: string;
  /**
   * @example
   * 2035-12-31
   */
  prodAuthPeriod?: string;
  /**
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
  data?: ListAuthorizedDataServiceApiDetailsResponseBodyResultData[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 非法入参
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  result?: ListAuthorizedDataServiceApiDetailsResponseBodyResult;
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

