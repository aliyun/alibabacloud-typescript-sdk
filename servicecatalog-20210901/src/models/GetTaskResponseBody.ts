// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTaskDetailLogTerraformLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the Terraform command that is run. Valid values:
   * 
   * *   apply
   * *   plan
   * *   destroy
   * *   version
   * 
   * For more information about Terraform commands, see [Basic CLI Features](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content of the output stream that is returned after the command is run.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * *   stdout: a standard output stream
   * *   stderr: a standard error stream
   * 
   * @example
   * stdout
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailLog extends $dara.Model {
  /**
   * @remarks
   * The Terraform logs.
   */
  terraformLogs?: GetTaskResponseBodyTaskDetailLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailLogTerraformLogs },
    };
  }

  validate() {
    if(Array.isArray(this.terraformLogs)) {
      $dara.Model.validateArray(this.terraformLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailOutputs extends $dara.Model {
  /**
   * @remarks
   * The description of the output parameter for the template.
   * 
   * @example
   * The ECS instance ID.
   */
  description?: string;
  /**
   * @remarks
   * The name of the output parameter for the template.
   * 
   * @example
   * instance_id
   */
  outputKey?: string;
  /**
   * @remarks
   * The value of the output parameter for the template.
   * 
   * @example
   * i-xxxxxx
   */
  outputValue?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputKey: 'OutputKey',
      outputValue: 'OutputValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputKey: 'string',
      outputValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the input parameter for the template.
   * 
   * @example
   * instance_type
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the input parameter for the template.
   * 
   * @example
   * ecs.s6-c1m1.small
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailTaskTags extends $dara.Model {
  /**
   * @remarks
   * The custom tag key.
   * 
   * The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The custom tag value.
   * 
   * The value must be 1 to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetTaskResponseBodyTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-23T09:46:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The logs of the instance.
   */
  log?: GetTaskResponseBodyTaskDetailLog;
  /**
   * @remarks
   * The output parameters of the template.
   */
  outputs?: GetTaskResponseBodyTaskDetailOutputs[];
  /**
   * @remarks
   * The parameters that are specified in the template.
   */
  parameters?: GetTaskResponseBodyTaskDetailParameters[];
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * DEMO-Create an ECS instance
   */
  productName?: string;
  /**
   * @remarks
   * The ID of the product version.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  /**
   * @remarks
   * The name of the product version.
   * 
   * @example
   * 1.0
   */
  productVersionName?: string;
  /**
   * @remarks
   * The ID of the product instance.
   * 
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  /**
   * @remarks
   * The name of the product instance.
   * 
   * @example
   * DEMO-ECS instance
   */
  provisionedProductName?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   Succeeded: The task was successful.
   * *   InProgress: The task was in progress.
   * *   Failed: The task failed.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The message that is returned for the status of the task.
   * 
   * > This parameter is returned only when Failed is returned for the Status parameter.
   * 
   * @example
   * Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...
   */
  statusMessage?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * task-bp1dmg242c****
   */
  taskId?: string;
  /**
   * @remarks
   * The custom tags.
   */
  taskTags?: GetTaskResponseBodyTaskDetailTaskTags[];
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   LaunchProduct: a task that launches the product.
   * *   UpdateProvisionedProduct: a task that updates the information about the product instance.
   * *   TerminateProvisionedProduct: a task that terminates the product instance.
   * 
   * @example
   * LaunchProduct
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-23T09:47:29Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      log: 'Log',
      outputs: 'Outputs',
      parameters: 'Parameters',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskId: 'TaskId',
      taskTags: 'TaskTags',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      log: GetTaskResponseBodyTaskDetailLog,
      outputs: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailOutputs },
      parameters: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailParameters },
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      status: 'string',
      statusMessage: 'string',
      taskId: 'string',
      taskTags: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailTaskTags },
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.taskTags)) {
      $dara.Model.validateArray(this.taskTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the task.
   */
  taskDetail?: GetTaskResponseBodyTaskDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskDetail: GetTaskResponseBodyTaskDetail,
    };
  }

  validate() {
    if(this.taskDetail && typeof (this.taskDetail as any).validate === 'function') {
      (this.taskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

