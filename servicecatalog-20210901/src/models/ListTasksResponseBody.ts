// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksResponseBodyTaskDetailsLogTerraformLogs extends $dara.Model {
  /**
   * @example
   * apply
   */
  command?: string;
  /**
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
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

export class ListTasksResponseBodyTaskDetailsLog extends $dara.Model {
  terraformLogs?: ListTasksResponseBodyTaskDetailsLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetailsLogTerraformLogs },
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

export class ListTasksResponseBodyTaskDetailsOutputs extends $dara.Model {
  /**
   * @example
   * The ECS instance ID.
   */
  description?: string;
  /**
   * @example
   * instance_id
   */
  outputKey?: string;
  /**
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

export class ListTasksResponseBodyTaskDetailsParameters extends $dara.Model {
  /**
   * @example
   * instance_type
   */
  parameterKey?: string;
  /**
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

export class ListTasksResponseBodyTaskDetails extends $dara.Model {
  /**
   * @example
   * 2022-05-23T09:46:27Z
   */
  createTime?: string;
  log?: ListTasksResponseBodyTaskDetailsLog;
  outputs?: ListTasksResponseBodyTaskDetailsOutputs[];
  parameters?: ListTasksResponseBodyTaskDetailsParameters[];
  /**
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  productName?: string;
  /**
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  /**
   * @example
   * 1.0
   */
  productVersionName?: string;
  /**
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  provisionedProductName?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...
   */
  statusMessage?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * task-bp1dmg242c****
   */
  taskId?: string;
  /**
   * @example
   * LaunchProduct
   */
  taskType?: string;
  /**
   * @example
   * 2022-05-26T03:28:45Z
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
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      log: ListTasksResponseBodyTaskDetailsLog,
      outputs: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetailsOutputs },
      parameters: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetailsParameters },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  taskDetails?: ListTasksResponseBodyTaskDetails[];
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskDetails: 'TaskDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskDetails: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetails },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskDetails)) {
      $dara.Model.validateArray(this.taskDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

