// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";


export class ImportHttpApiResponseBodyDataDryRunInfoFailureComponents extends $dara.Model {
  /**
   * @remarks
   * The reason for the dry run failure.
   * 
   * @example
   * 数据结构定义有误。
   */
  errorMessage?: string;
  /**
   * @remarks
   * The data structure name.
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
   * The reason for the dry run failure.
   * 
   * @example
   * 缺少响应定义。
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operation method.
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

export class ImportHttpApiResponseBodyDataDryRunInfoFailureRoutes extends $dara.Model {
  errorMessage?: string;
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

export class ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data structure will be created or updated.
   * 
   * - `Create`: Creates a new data structure.
   * 
   * - `Update`: Updates an existing data structure.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The data structure name.
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
   * Indicates whether the operation creates or updates a resource.
   * 
   * - `Create`: Creates a new resource.
   * 
   * - `Update`: Updates an existing resource.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The operation method.
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

export class ImportHttpApiResponseBodyDataDryRunInfoSuccessRoutes extends $dara.Model {
  action?: string;
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

export class ImportHttpApiResponseBodyDataDryRunInfo extends $dara.Model {
  /**
   * @remarks
   * Global error messages. If this list is not empty, the API import fails.
   */
  errorMessages?: string[];
  /**
   * @remarks
   * Details of the existing API. If this field is populated, the import operation updates this API.
   */
  existHttpApiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * Data structures that failed the dry run.
   */
  failureComponents?: ImportHttpApiResponseBodyDataDryRunInfoFailureComponents[];
  /**
   * @remarks
   * Operations that failed the dry run.
   */
  failureOperations?: ImportHttpApiResponseBodyDataDryRunInfoFailureOperations[];
  failureRoutes?: ImportHttpApiResponseBodyDataDryRunInfoFailureRoutes[];
  mcpToolsDefinition?: string;
  /**
   * @remarks
   * Data structures that passed the dry run.
   */
  successComponents?: ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents[];
  /**
   * @remarks
   * Operations that passed the dry run.
   */
  successOperations?: ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations[];
  successRoutes?: ImportHttpApiResponseBodyDataDryRunInfoSuccessRoutes[];
  /**
   * @remarks
   * Global warning messages. If this list is not empty, some operations or data structures might not be imported.
   */
  warningMessages?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'errorMessages',
      existHttpApiInfo: 'existHttpApiInfo',
      failureComponents: 'failureComponents',
      failureOperations: 'failureOperations',
      failureRoutes: 'failureRoutes',
      mcpToolsDefinition: 'mcpToolsDefinition',
      successComponents: 'successComponents',
      successOperations: 'successOperations',
      successRoutes: 'successRoutes',
      warningMessages: 'warningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: { 'type': 'array', 'itemType': 'string' },
      existHttpApiInfo: HttpApiApiInfo,
      failureComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureComponents },
      failureOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureOperations },
      failureRoutes: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureRoutes },
      mcpToolsDefinition: 'string',
      successComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents },
      successOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations },
      successRoutes: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessRoutes },
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
    if(Array.isArray(this.failureRoutes)) {
      $dara.Model.validateArray(this.failureRoutes);
    }
    if(Array.isArray(this.successComponents)) {
      $dara.Model.validateArray(this.successComponents);
    }
    if(Array.isArray(this.successOperations)) {
      $dara.Model.validateArray(this.successOperations);
    }
    if(Array.isArray(this.successRoutes)) {
      $dara.Model.validateArray(this.successRoutes);
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
   * The results of the dry run.
   */
  dryRunInfo?: ImportHttpApiResponseBodyDataDryRunInfo;
  /**
   * @remarks
   * The unique ID of the HTTP API.
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
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Details of the imported API.
   */
  data?: ImportHttpApiResponseBodyData;
  /**
   * @remarks
   * The response message.
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

