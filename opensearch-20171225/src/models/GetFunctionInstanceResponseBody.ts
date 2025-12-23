// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionInstanceResponseBodyResultBelongs extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * general
   */
  category?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * ecommerce
   */
  domain?: string;
  /**
   * @remarks
   * The abbreviation of the language that applies.
   * 
   * @example
   * zh
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

export class GetFunctionInstanceResponseBodyResultCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param1
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

export class GetFunctionInstanceResponseBodyResultTask extends $dara.Model {
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success: succeeded
   * *   failed: failed
   * *   untrained: to be trained
   * *   pending: being scheduled
   * *   running: being trained
   * 
   * @example
   * success
   */
  dagStatus?: string;
  /**
   * @remarks
   * The time consumed for the most recent run, in milliseconds.
   * 
   * @example
   * 1234
   */
  lastRunTime?: number;
  static names(): { [key: string]: string } {
    return {
      dagStatus: 'DagStatus',
      lastRunTime: 'LastRunTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagStatus: 'string',
      lastRunTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBodyResultUsageParameters extends $dara.Model {
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

export class GetFunctionInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The information about the instance.
   */
  belongs?: GetFunctionInstanceResponseBodyResultBelongs;
  /**
   * @remarks
   * The parameters that are used to create the instance.
   */
  createParameters?: GetFunctionInstanceResponseBodyResultCreateParameters[];
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds.
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
   * The description of the instance.
   * 
   * @example
   * instance descriptions
   */
  description?: string;
  /**
   * @remarks
   * The extended information, which is a JSON string.
   * 
   * @example
   * {\\"dataReport\\":{},\\"errors\\":{}}
   */
  extendInfo?: string;
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
   * The type of the feature.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ctr_test
   */
  instanceName?: string;
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
   * How the instance is created. Valid values:
   * 
   * *   user: The instance is created by user.
   * *   builtin: The instance is created by the system.
   * 
   * @example
   * user
   */
  source?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
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
   * The information about the training task. This parameter is not displayed if no task is available.
   */
  task?: GetFunctionInstanceResponseBodyResultTask;
  /**
   * @remarks
   * The parameters that are used.
   */
  usageParameters?: GetFunctionInstanceResponseBodyResultUsageParameters[];
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 101
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
      task: 'Task',
      usageParameters: 'UsageParameters',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongs: GetFunctionInstanceResponseBodyResultBelongs,
      createParameters: { 'type': 'array', 'itemType': GetFunctionInstanceResponseBodyResultCreateParameters },
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
      task: GetFunctionInstanceResponseBodyResultTask,
      usageParameters: { 'type': 'array', 'itemType': GetFunctionInstanceResponseBodyResultUsageParameters },
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
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
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

export class GetFunctionInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. If no error occurs, this parameter is left empty.
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
   * The error message.
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
   * 68ED4E1B-92B8-5821-A886-9C90686139EB
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the instance.
   * 
   * @example
   * {}
   */
  result?: GetFunctionInstanceResponseBodyResult;
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
      result: GetFunctionInstanceResponseBodyResult,
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

