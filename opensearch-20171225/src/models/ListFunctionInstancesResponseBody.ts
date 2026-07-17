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
   * The language code.
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
   * The ownership information of the instance.
   * 
   * @example
   * {}
   */
  belongs?: ListFunctionInstancesResponseBodyResultBelongs;
  /**
   * @remarks
   * The list of parameters for the instance.
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
   * The training schedule. This is a cron expression in the format of Minutes Hours DayofMonth Month DayofWeek. If this parameter is empty, periodic training is not performed.
   * 
   * @example
   * 0 3 ? * 0,1,3,5 (周日，周一，周三，周五凌晨3点)
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
   * The extended information. This is a JSON string that contains information such as model evaluation results and error messages.
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
   * The source of the instance. Valid values:
   * 
   * - user: The instance is created by the user.
   * 
   * - builtin: The instance is created by the system.
   * 
   * @example
   * "user"
   */
  source?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * 1. unavailable: No model is available. You must train a model before you can use the instance.
   * 
   * 2. available: The instance is available.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The list of parameters in use.
   */
  usageParameters?: ListFunctionInstancesResponseBodyResultUsageParameters[];
  /**
   * @remarks
   * The version ID.
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
   * The error code. This parameter is empty if the request is successful.
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
   * The request latency, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message. This parameter is empty if the request is successful.
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
   * The list of instances.
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
   * The total number of entries.
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

