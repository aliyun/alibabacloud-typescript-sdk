// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestDataServiceApiRequestBodyParams extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * name
   */
  paramKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * test
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramKey: 'ParamKey',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramKey: 'string',
      paramValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDataServiceApiRequestHeadParams extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * requestId
   */
  paramKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * abcd
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramKey: 'ParamKey',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramKey: 'string',
      paramValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDataServiceApiRequestPathParams extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * path1
   */
  paramKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * api
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramKey: 'ParamKey',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramKey: 'string',
      paramValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDataServiceApiRequestQueryParam extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * name
   */
  paramKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * test
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramKey: 'ParamKey',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramKey: 'string',
      paramValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataService Studio API on which the test is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 12343
   */
  apiId?: number;
  /**
   * @remarks
   * The data of the request body.
   * 
   * @example
   * {"name":"test"}
   */
  bodyContent?: string;
  /**
   * @remarks
   * The request parameters that are contained in the request body.
   */
  bodyParams?: TestDataServiceApiRequestBodyParams[];
  /**
   * @remarks
   * The request parameters that are contained in the request header.
   */
  headParams?: TestDataServiceApiRequestHeadParams[];
  /**
   * @remarks
   * The request parameters that are contained in the request path.
   */
  pathParams?: TestDataServiceApiRequestPathParams[];
  /**
   * @remarks
   * The request parameters that are contained in the query.
   */
  queryParam?: TestDataServiceApiRequestQueryParam[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      bodyContent: 'BodyContent',
      bodyParams: 'BodyParams',
      headParams: 'HeadParams',
      pathParams: 'PathParams',
      queryParam: 'QueryParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      bodyContent: 'string',
      bodyParams: { 'type': 'array', 'itemType': TestDataServiceApiRequestBodyParams },
      headParams: { 'type': 'array', 'itemType': TestDataServiceApiRequestHeadParams },
      pathParams: { 'type': 'array', 'itemType': TestDataServiceApiRequestPathParams },
      queryParam: { 'type': 'array', 'itemType': TestDataServiceApiRequestQueryParam },
    };
  }

  validate() {
    if(Array.isArray(this.bodyParams)) {
      $dara.Model.validateArray(this.bodyParams);
    }
    if(Array.isArray(this.headParams)) {
      $dara.Model.validateArray(this.headParams);
    }
    if(Array.isArray(this.pathParams)) {
      $dara.Model.validateArray(this.pathParams);
    }
    if(Array.isArray(this.queryParam)) {
      $dara.Model.validateArray(this.queryParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

