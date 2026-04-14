// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed extends $dara.Model {
  errorMsg?: string;
  httpMethod?: string;
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
  errorMsg?: string;
  groupId?: string;
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
  groupId?: string;
  modelName?: string;
  modelOperation?: string;
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
  apiOperation?: string;
  apiSwagger?: string;
  apiUid?: string;
  httpMethod?: string;
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
  failed?: DryRunSwaggerResponseBodyFailed;
  /**
   * @remarks
   * The global condition.
   * 
   * @example
   * {}
   */
  globalCondition?: string;
  modelFailed?: DryRunSwaggerResponseBodyModelFailed;
  modelSuccess?: DryRunSwaggerResponseBodyModelSuccess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
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

