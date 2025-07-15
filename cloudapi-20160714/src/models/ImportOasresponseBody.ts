// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASResponseBodyErrorMessages extends $dara.Model {
  errorMessage?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.errorMessage)) {
      $dara.Model.validateArray(this.errorMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyFailedApisFailedApi extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid Api Definition.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP method configured when you created the API.
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request path configured when you created the API.
   * 
   * @example
   * /st1
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

export class ImportOASResponseBodyFailedApis extends $dara.Model {
  failedApi?: ImportOASResponseBodyFailedApisFailedApi[];
  static names(): { [key: string]: string } {
    return {
      failedApi: 'FailedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedApi: { 'type': 'array', 'itemType': ImportOASResponseBodyFailedApisFailedApi },
    };
  }

  validate() {
    if(Array.isArray(this.failedApi)) {
      $dara.Model.validateArray(this.failedApi);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyFailedModelsFailedModel extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid Model Definition.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 2c1bc62e19614cc68c6b0b484bc9c5db
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * test
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

export class ImportOASResponseBodyFailedModels extends $dara.Model {
  failedModel?: ImportOASResponseBodyFailedModelsFailedModel[];
  static names(): { [key: string]: string } {
    return {
      failedModel: 'FailedModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedModel: { 'type': 'array', 'itemType': ImportOASResponseBodyFailedModelsFailedModel },
    };
  }

  validate() {
    if(Array.isArray(this.failedModel)) {
      $dara.Model.validateArray(this.failedModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodySuccessApisSuccessApi extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 92af1abffc2443eaa2b815fdbd9c13f1
   */
  apiId?: string;
  /**
   * @remarks
   * Indicates that the operation is CREATE or MODIFY.
   * 
   * @example
   * CREATE
   */
  apiOperation?: string;
  /**
   * @remarks
   * The HTTP method configured when you created the API.
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request path configured when you created the API.
   * 
   * @example
   * /st1
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiOperation: 'ApiOperation',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiOperation: 'string',
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

export class ImportOASResponseBodySuccessApis extends $dara.Model {
  successApi?: ImportOASResponseBodySuccessApisSuccessApi[];
  static names(): { [key: string]: string } {
    return {
      successApi: 'SuccessApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successApi: { 'type': 'array', 'itemType': ImportOASResponseBodySuccessApisSuccessApi },
    };
  }

  validate() {
    if(Array.isArray(this.successApi)) {
      $dara.Model.validateArray(this.successApi);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodySuccessModelsSuccessModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * feaccf67040643bcbdedb253e59eb527
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * test
   */
  modelName?: string;
  /**
   * @remarks
   * The operation of the model. Valid values: CREATE and MODIFY.
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
   * 1r4efwee19614cc68c6b0b484bc9c5dbs
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

export class ImportOASResponseBodySuccessModels extends $dara.Model {
  successModel?: ImportOASResponseBodySuccessModelsSuccessModel[];
  static names(): { [key: string]: string } {
    return {
      successModel: 'SuccessModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successModel: { 'type': 'array', 'itemType': ImportOASResponseBodySuccessModelsSuccessModel },
    };
  }

  validate() {
    if(Array.isArray(this.successModel)) {
      $dara.Model.validateArray(this.successModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBodyWarningMessages extends $dara.Model {
  warningMessage?: string[];
  static names(): { [key: string]: string } {
    return {
      warningMessage: 'WarningMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningMessage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.warningMessage)) {
      $dara.Model.validateArray(this.warningMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportOASResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error messages that appear due to the invalid data in the imported file.
   */
  errorMessages?: ImportOASResponseBodyErrorMessages;
  /**
   * @remarks
   * The APIs that failed to pass the precheck.
   */
  failedApis?: ImportOASResponseBodyFailedApis;
  /**
   * @remarks
   * The information about the models that failed to pass the precheck.
   */
  failedModels?: ImportOASResponseBodyFailedModels;
  /**
   * @remarks
   * The ID of the asynchronous API import task that was generated during the import operation. This ID is used to query the execution status of the API import task.
   * 
   * @example
   * c16a1880f5164d779f6a54f64d997cd9
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7FE7172-AA75-5880-B6F7-C00893E9BC06
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the APIs that have passed the precheck.
   */
  successApis?: ImportOASResponseBodySuccessApis;
  /**
   * @remarks
   * The information about the models that have passed the precheck.
   */
  successModels?: ImportOASResponseBodySuccessModels;
  /**
   * @remarks
   * The warning messages that appear due to the invalid data in the imported file.
   */
  warningMessages?: ImportOASResponseBodyWarningMessages;
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'ErrorMessages',
      failedApis: 'FailedApis',
      failedModels: 'FailedModels',
      operationId: 'OperationId',
      requestId: 'RequestId',
      successApis: 'SuccessApis',
      successModels: 'SuccessModels',
      warningMessages: 'WarningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: ImportOASResponseBodyErrorMessages,
      failedApis: ImportOASResponseBodyFailedApis,
      failedModels: ImportOASResponseBodyFailedModels,
      operationId: 'string',
      requestId: 'string',
      successApis: ImportOASResponseBodySuccessApis,
      successModels: ImportOASResponseBodySuccessModels,
      warningMessages: ImportOASResponseBodyWarningMessages,
    };
  }

  validate() {
    if(this.errorMessages && typeof (this.errorMessages as any).validate === 'function') {
      (this.errorMessages as any).validate();
    }
    if(this.failedApis && typeof (this.failedApis as any).validate === 'function') {
      (this.failedApis as any).validate();
    }
    if(this.failedModels && typeof (this.failedModels as any).validate === 'function') {
      (this.failedModels as any).validate();
    }
    if(this.successApis && typeof (this.successApis as any).validate === 'function') {
      (this.successApis as any).validate();
    }
    if(this.successModels && typeof (this.successModels as any).validate === 'function') {
      (this.successModels as any).validate();
    }
    if(this.warningMessages && typeof (this.warningMessages as any).validate === 'function') {
      (this.warningMessages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

