// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the API is created.
   * 
   * @example
   * api already exists : apiUid ===> 8e274ec61cf6468e83b68371956831cb
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP method configured when the API is created.
   * 
   * @example
   * post
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request path configured when the API is created.
   * 
   * @example
   * /http/get/mapping
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      httpMethod: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyFailed extends $dara.Model {
  apiImportSwaggerFailed?: DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerFailed: 'ApiImportSwaggerFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerFailed: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportSwaggerFailed)) {
      $dara.Model.validateArray(this.apiImportSwaggerFailed);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelFailedApiImportModelFailed extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Not Found
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 36d4bcfaec1946e1870d90b2d7519710
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * Region
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      groupId: 'string',
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelFailed extends $dara.Model {
  apiImportModelFailed?: DryRunSwaggerResponseBodyModelFailedApiImportModelFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelFailed: 'ApiImportModelFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelFailed: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodyModelFailedApiImportModelFailed },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportModelFailed)) {
      $dara.Model.validateArray(this.apiImportModelFailed);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelSuccessApiImportModelSuccess extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * b2d552ed90ca435b86f7bf8d45414793
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * NewInstance
   */
  modelName?: string;
  /**
   * @remarks
   * The model operation.
   * 
   * @example
   * CREATE
   */
  modelOperation?: string;
  /**
   * @remarks
   * The UID of the model.
   * 
   * @example
   * ec1946e1870d90b2d7519
   */
  modelUid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
      modelOperation: 'ModelOperation',
      modelUid: 'ModelUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
      modelOperation: 'string',
      modelUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodyModelSuccess extends $dara.Model {
  apiImportModelSuccess?: DryRunSwaggerResponseBodyModelSuccessApiImportModelSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelSuccess: 'ApiImportModelSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelSuccess: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodyModelSuccessApiImportModelSuccess },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportModelSuccess)) {
      $dara.Model.validateArray(this.apiImportModelSuccess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the operation is CREATE or MODIFY.
   * 
   * @example
   * CREATE
   */
  apiOperation?: string;
  /**
   * @remarks
   * The API definition that complies with the Swagger specification.
   * 
   * @example
   * "A Swagger API definition in YAML"
   */
  apiSwagger?: string;
  /**
   * @remarks
   * The UID of the successfully imported API.
   * 
   * @example
   * 8e274ec61cf6468e83b68371956831cb
   */
  apiUid?: string;
  /**
   * @remarks
   * The HTTP method configured when the API is created.
   * 
   * @example
   * get
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request path configured when the API is created.
   * 
   * @example
   * /http/get/mapping
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      apiOperation: 'ApiOperation',
      apiSwagger: 'ApiSwagger',
      apiUid: 'ApiUid',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiOperation: 'string',
      apiSwagger: 'string',
      apiUid: 'string',
      httpMethod: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBodySuccess extends $dara.Model {
  apiDryRunSwaggerSuccess?: DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiDryRunSwaggerSuccess: 'ApiDryRunSwaggerSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDryRunSwaggerSuccess: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess },
    };
  }

  validate() {
    if(Array.isArray(this.apiDryRunSwaggerSuccess)) {
      $dara.Model.validateArray(this.apiDryRunSwaggerSuccess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DryRunSwaggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The APIs that failed to be created based on the Swagger-compliant data imported this time.
   */
  failed?: DryRunSwaggerResponseBodyFailed;
  /**
   * @remarks
   * The global condition.
   * 
   * @example
   * {}
   */
  globalCondition?: string;
  /**
   * @remarks
   * The models that failed to be imported through the Swagger-compliant data this time.
   */
  modelFailed?: DryRunSwaggerResponseBodyModelFailed;
  /**
   * @remarks
   * The models that failed to be imported through the Swagger-compliant data this time.
   */
  modelSuccess?: DryRunSwaggerResponseBodyModelSuccess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * The APIs that are created based on the Swagger-compliant data imported this time.
   */
  success?: DryRunSwaggerResponseBodySuccess;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      globalCondition: 'GlobalCondition',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: DryRunSwaggerResponseBodyFailed,
      globalCondition: 'string',
      modelFailed: DryRunSwaggerResponseBodyModelFailed,
      modelSuccess: DryRunSwaggerResponseBodyModelSuccess,
      requestId: 'string',
      success: DryRunSwaggerResponseBodySuccess,
    };
  }

  validate() {
    if(this.failed && typeof (this.failed as any).validate === 'function') {
      (this.failed as any).validate();
    }
    if(this.modelFailed && typeof (this.modelFailed as any).validate === 'function') {
      (this.modelFailed as any).validate();
    }
    if(this.modelSuccess && typeof (this.modelSuccess as any).validate === 'function') {
      (this.modelSuccess as any).validate();
    }
    if(this.success && typeof (this.success as any).validate === 'function') {
      (this.success as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

