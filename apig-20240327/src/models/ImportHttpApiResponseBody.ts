// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";


export class ImportHttpApiResponseBodyDataDryRunInfoFailureComponents extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The data struct is incorrectly defined.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The data struct name.
   * 
   * @example
   * orderDTO
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBodyDataDryRunInfoFailureOperations extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Missing response definition.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP method of the operation.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The operation path.
   * 
   * @example
   * /v1/orders
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      method: 'method',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      method: 'string',
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

export class ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents extends $dara.Model {
  /**
   * @remarks
   * The action that will be performed for the data struct after the dry run.
   * 
   * *   Create: The data struct is created.
   * *   Update: The data struct is updated.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The data struct name.
   * 
   * @example
   * userDTO
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations extends $dara.Model {
  /**
   * @remarks
   * The action that will be performed for the operation after the dry run.
   * 
   * *   Create: The operation is created.
   * *   Update: The operation is updated.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The HTTP method of the operation.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The operation name.
   * 
   * @example
   * CreateUser
   */
  name?: string;
  /**
   * @remarks
   * The operation path.
   * 
   * @example
   * /v1/users
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      method: 'method',
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      method: 'string',
      name: 'string',
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

export class ImportHttpApiResponseBodyDataDryRunInfo extends $dara.Model {
  /**
   * @remarks
   * The error messages. If an error message is returned, the API fails to be imported.
   */
  errorMessages?: string[];
  /**
   * @remarks
   * The existing APIs. If an existing API is returned, the import updates the existing API.
   */
  existHttpApiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * The data structs that fail the dry run.
   */
  failureComponents?: ImportHttpApiResponseBodyDataDryRunInfoFailureComponents[];
  /**
   * @remarks
   * The operations that fail the dry run.
   */
  failureOperations?: ImportHttpApiResponseBodyDataDryRunInfoFailureOperations[];
  /**
   * @remarks
   * The data structs that pass the dry run.
   */
  successComponents?: ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents[];
  /**
   * @remarks
   * The operations that pass the dry run.
   */
  successOperations?: ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations[];
  /**
   * @remarks
   * The alerts. If an alert is returned, specific operations or structs may fail to be imported.
   */
  warningMessages?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'errorMessages',
      existHttpApiInfo: 'existHttpApiInfo',
      failureComponents: 'failureComponents',
      failureOperations: 'failureOperations',
      successComponents: 'successComponents',
      successOperations: 'successOperations',
      warningMessages: 'warningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: { 'type': 'array', 'itemType': 'string' },
      existHttpApiInfo: HttpApiApiInfo,
      failureComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureComponents },
      failureOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureOperations },
      successComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents },
      successOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations },
      warningMessages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.errorMessages)) {
      $dara.Model.validateArray(this.errorMessages);
    }
    if(this.existHttpApiInfo && typeof (this.existHttpApiInfo as any).validate === 'function') {
      (this.existHttpApiInfo as any).validate();
    }
    if(Array.isArray(this.failureComponents)) {
      $dara.Model.validateArray(this.failureComponents);
    }
    if(Array.isArray(this.failureOperations)) {
      $dara.Model.validateArray(this.failureOperations);
    }
    if(Array.isArray(this.successComponents)) {
      $dara.Model.validateArray(this.successComponents);
    }
    if(Array.isArray(this.successOperations)) {
      $dara.Model.validateArray(this.successOperations);
    }
    if(Array.isArray(this.warningMessages)) {
      $dara.Model.validateArray(this.warningMessages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunInfo?: ImportHttpApiResponseBodyDataDryRunInfo;
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * import-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunInfo: 'dryRunInfo',
      httpApiId: 'httpApiId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunInfo: ImportHttpApiResponseBodyDataDryRunInfo,
      httpApiId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.dryRunInfo && typeof (this.dryRunInfo as any).validate === 'function') {
      (this.dryRunInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The API information.
   */
  data?: ImportHttpApiResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE857A85-251D-5018-8103-A38957D71E20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportHttpApiResponseBodyData,
      message: 'string',
      requestId: 'string',
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

