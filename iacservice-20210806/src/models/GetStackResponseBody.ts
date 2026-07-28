// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyStackConfig extends $dara.Model {
  /**
   * @remarks
   * The component configuration.
   * 
   * @example
   * format_version: IaCService/2021-08-06\\ndescription: create ALB\\nupstream_input:\\n  - name: stack_network\\n ...
   */
  componentContent?: string;
  /**
   * @remarks
   * The deployment configuration.
   * 
   * @example
   * format_version: IaCService/2021-08-06\\ndescription: create ALB \\nvariable:\\n  - name: region\\n    type: string\\n ...
   */
  deploymentContent?: string;
  static names(): { [key: string]: string } {
    return {
      componentContent: 'componentContent',
      deploymentContent: 'deploymentContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentContent: 'string',
      deploymentContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyStack extends $dara.Model {
  /**
   * @remarks
   * The stack configuration.
   */
  config?: GetStackResponseBodyStackConfig;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-24T02:58:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * The current configuration version number, such as v1. The initial value is v1. The version number increments each time the stack is updated or refreshed and the configuration changes.
   * 
   * @example
   * v1
   */
  currentConfigVersion?: string;
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * the description of stack
   */
  description?: string;
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @remarks
   * The RAM role assumed by the system to perform resource change operations during stack deployment.
   * 
   * @example
   * TestIacRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The configuration source of the stack. Valid values:
   * - OSS: a template stored in Object Storage Service (OSS).
   * - IAC_SERVICE_MODULE: a template created in the automation service console.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path value of the configuration source. The value cannot exceed 1000 characters.
   * - If the source is OSS, the value is in the format of oss::<file link>. The file must be a ZIP file. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If the source is IAC_SERVICE_MODULE, the value is a template ID. Example: mod-xxxxx.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The unique identifier of the stack, which is generated after the stack is created.
   * 
   * @example
   * stack-as1d4vld898ppnqxxxxxx
   */
  stackId?: string;
  /**
   * @remarks
   * The stack status.
   * | Name | Description |
   * |------|------|
   * | Creating | The stack is being created. |
   * | Created | The stack is created. |
   * | Waiting | The stack is waiting for deployment. |
   * | Deploying | The stack is being deployed. |
   * | Deployed | The stack is deployed. |
   * | Errored | The deployment failed. |
   * | Deleting | The stack is being deleted. |
   * | Deleted | The stack is deleted. |
   * | DeleteFailed | The deletion failed. |
   * | DetectTriggered | Drift detection is triggered. |.
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The deployment trigger method of the stack. This field is not publicly available.
   * - SetUpdated: triggered by file changes.
   * 
   * @example
   * SetUpdated
   */
  triggerStrategy?: string;
  /**
   * @remarks
   * The directory where the deployment and component configuration files of the stack are located. Set this parameter to / for the root directory.
   * 
   * @example
   * /
   */
  workingDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      currentConfigVersion: 'currentConfigVersion',
      description: 'description',
      name: 'name',
      ramRole: 'ramRole',
      source: 'source',
      sourcePath: 'sourcePath',
      stackId: 'stackId',
      status: 'status',
      triggerStrategy: 'triggerStrategy',
      workingDirectory: 'workingDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetStackResponseBodyStackConfig,
      createTime: 'string',
      currentConfigVersion: 'string',
      description: 'string',
      name: 'string',
      ramRole: 'string',
      source: 'string',
      sourcePath: 'string',
      stackId: 'string',
      status: 'string',
      triggerStrategy: 'string',
      workingDirectory: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7070EC3-DF66-58BA-A1DD-A8574FF53143
   */
  requestId?: string;
  /**
   * @remarks
   * The stack information.
   */
  stack?: GetStackResponseBodyStack;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      stack: 'stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stack: GetStackResponseBodyStack,
    };
  }

  validate() {
    if(this.stack && typeof (this.stack as any).validate === 'function') {
      (this.stack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

