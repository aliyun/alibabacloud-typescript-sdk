// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportSwaggerResponseBodyFailedApiImportSwaggerFailed extends $dara.Model {
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

export class ImportSwaggerResponseBodyFailed extends $dara.Model {
  apiImportSwaggerFailed?: ImportSwaggerResponseBodyFailedApiImportSwaggerFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerFailed: 'ApiImportSwaggerFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerFailed: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyFailedApiImportSwaggerFailed },
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

export class ImportSwaggerResponseBodyModelFailedApiImportModelFailed extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error msg
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

export class ImportSwaggerResponseBodyModelFailed extends $dara.Model {
  apiImportModelFailed?: ImportSwaggerResponseBodyModelFailedApiImportModelFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelFailed: 'ApiImportModelFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelFailed: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyModelFailedApiImportModelFailed },
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

export class ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess extends $dara.Model {
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
   * The model operation
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
   * d4bcfaec1946e1870d
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

export class ImportSwaggerResponseBodyModelSuccess extends $dara.Model {
  apiImportModelSuccess?: ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelSuccess: 'ApiImportModelSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelSuccess: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess },
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

export class ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess extends $dara.Model {
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
      apiUid: 'ApiUid',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiOperation: 'string',
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

export class ImportSwaggerResponseBodySuccess extends $dara.Model {
  apiImportSwaggerSuccess?: ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerSuccess: 'ApiImportSwaggerSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerSuccess: { 'type': 'array', 'itemType': ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportSwaggerSuccess)) {
      $dara.Model.validateArray(this.apiImportSwaggerSuccess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSwaggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The APIs that failed to be created based on the Swagger-compliant data imported this time.
   */
  failed?: ImportSwaggerResponseBodyFailed;
  /**
   * @remarks
   * The models that failed to be imported through the Swagger-compliant data this time.
   */
  modelFailed?: ImportSwaggerResponseBodyModelFailed;
  /**
   * @remarks
   * The models that were imported through the Swagger-compliant data this time.
   */
  modelSuccess?: ImportSwaggerResponseBodyModelSuccess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 647CEF05-404C-4125-B3D7-44792EB77392
   */
  requestId?: string;
  /**
   * @remarks
   * The APIs that are created based on the Swagger-compliant data imported this time.
   */
  success?: ImportSwaggerResponseBodySuccess;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: ImportSwaggerResponseBodyFailed,
      modelFailed: ImportSwaggerResponseBodyModelFailed,
      modelSuccess: ImportSwaggerResponseBodyModelSuccess,
      requestId: 'string',
      success: ImportSwaggerResponseBodySuccess,
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

