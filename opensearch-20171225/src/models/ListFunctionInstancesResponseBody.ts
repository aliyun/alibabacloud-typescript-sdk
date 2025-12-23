// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionInstancesResponseBodyResultBelongs extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * "general"
   */
  category?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * "ecommerce"
   */
  domain?: string;
  /**
   * @remarks
   * The abbreviation of the language that applies.
   * 
   * @example
   * "zh"
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      domain: 'Domain',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      domain: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBodyResultCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * "param1"
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * "value1"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBodyResultUsageParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * use_param1
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The information about the instance.
   * 
   * @example
   * {}
   */
  belongs?: ListFunctionInstancesResponseBodyResultBelongs;
  /**
   * @remarks
   * The parameters of the instance.
   * 
   * @example
   * []
   */
  createParameters?: ListFunctionInstancesResponseBodyResultCreateParameters[];
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1234
   */
  createTime?: number;
  /**
   * @remarks
   * The cron expression used to schedule training, in the format of (Minutes Hours DayofMonth Month DayofWeek). If the value is empty, it indicates that no periodic training is performed.
   * 
   * @example
   * 0 3 ? \\* 0,1,3,5 (at 3 a.m. on Sunday, Monday, Wednesday, and Friday)
   */
  cron?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * " "
   */
  description?: string;
  /**
   * @remarks
   * The extended information, which is a JSON string. It includes model evaluation information and error information.
   * 
   * @example
   * "{\\"dataReport\\":{},\\"errors\\":{}}"
   */
  extendInfo?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * "ctr"
   */
  functionName?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * @example
   * "PAAS"
   */
  functionType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * "ctr_test"
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * "tf_checkpoint"
   */
  modelType?: string;
  /**
   * @remarks
   * How the instance is created. Valid values:
   * 
   * *   user: The instance is created by user.
   * *   builtin: The instance is created by system.
   * 
   * @example
   * "user"
   */
  source?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * 1.  unavailable: No model is available. Models must be trained before you can use them.
   * 2.  available: Models can be used.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The parameters that are used.
   */
  usageParameters?: ListFunctionInstancesResponseBodyResultUsageParameters[];
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 123
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      belongs: 'Belongs',
      createParameters: 'CreateParameters',
      createTime: 'CreateTime',
      cron: 'Cron',
      description: 'Description',
      extendInfo: 'ExtendInfo',
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      instanceName: 'InstanceName',
      modelType: 'ModelType',
      source: 'Source',
      status: 'Status',
      usageParameters: 'UsageParameters',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongs: ListFunctionInstancesResponseBodyResultBelongs,
      createParameters: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResultCreateParameters },
      createTime: 'number',
      cron: 'string',
      description: 'string',
      extendInfo: 'string',
      functionName: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
      source: 'string',
      status: 'string',
      usageParameters: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResultUsageParameters },
      versionId: 'number',
    };
  }

  validate() {
    if(this.belongs && typeof (this.belongs as any).validate === 'function') {
      (this.belongs as any).validate();
    }
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
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

export class ListFunctionInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. If no error occurs, the parameter is left empty.
   * 
   * @example
   * Instance.NotExist
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
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message. If no error occurs, the parameter is left empty.
   * 
   * @example
   * instance not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A4D487A9-A456-5AA5-A9C6-B7BF2889CF74
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the instances.
   * 
   * @example
   * []
   */
  result?: ListFunctionInstancesResponseBodyResult[];
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * "OK"
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResult },
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

