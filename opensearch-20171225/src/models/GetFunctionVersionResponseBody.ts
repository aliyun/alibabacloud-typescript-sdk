// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionVersionResponseBodyResultVersionConfigCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * params1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResultVersionConfigDepends extends $dara.Model {
  /**
   * @remarks
   * The condition.
   * 
   * @example
   * ""
   */
  condition?: string;
  /**
   * @remarks
   * The dependency.
   * 
   * @example
   * ""
   */
  dependency?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ""
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      dependency: 'Dependency',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      dependency: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResultVersionConfigUsageParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ""
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * ""
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResultVersionConfig extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to create the instance.
   * 
   * @example
   * [                 {                     "name": "params1",                     "required": "true",                     "formItemProps": "{\\"required\\": true, \\"pattern?\\": \\"/^[a-zA-Z][a-zA-Z0-9_]{0,29}$/\\"}",                     "componentProps": "{\\"component\\": \\"Input\\", \\"attributes\\": {\\"defaultValue\\": \\"value1\\"}}"                 }             ]
   */
  createParameters?: GetFunctionVersionResponseBodyResultVersionConfigCreateParameters[];
  /**
   * @remarks
   * The dependencies of the instance.
   */
  depends?: GetFunctionVersionResponseBodyResultVersionConfigDepends[];
  /**
   * @remarks
   * The parameters that are used during online use of the instance.
   * 
   * @example
   * []
   */
  usageParameters?: GetFunctionVersionResponseBodyResultVersionConfigUsageParameters[];
  static names(): { [key: string]: string } {
    return {
      createParameters: 'CreateParameters',
      depends: 'Depends',
      usageParameters: 'UsageParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': GetFunctionVersionResponseBodyResultVersionConfigCreateParameters },
      depends: { 'type': 'array', 'itemType': GetFunctionVersionResponseBodyResultVersionConfigDepends },
      usageParameters: { 'type': 'array', 'itemType': GetFunctionVersionResponseBodyResultVersionConfigUsageParameters },
    };
  }

  validate() {
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
    }
    if(Array.isArray(this.depends)) {
      $dara.Model.validateArray(this.depends);
    }
    if(Array.isArray(this.usageParameters)) {
      $dara.Model.validateArray(this.usageParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * ctr
   */
  functionName?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   PAAS
   * *   SAAS
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The configuration information.
   */
  versionConfig?: GetFunctionVersionResponseBodyResultVersionConfig;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 101
   */
  versionId?: number;
  /**
   * @remarks
   * The name of the version.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      modelType: 'ModelType',
      versionConfig: 'VersionConfig',
      versionId: 'VersionId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      functionType: 'string',
      modelType: 'string',
      versionConfig: GetFunctionVersionResponseBodyResultVersionConfig,
      versionId: 'number',
      versionName: 'string',
    };
  }

  validate() {
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Version.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The maximum duration for which a task can be executed.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * version not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1638157479281
   */
  requestId?: string;
  /**
   * @remarks
   * The result body.
   * 
   * @example
   * []
   */
  result?: GetFunctionVersionResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionVersionResponseBodyResult,
      status: 'string',
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

