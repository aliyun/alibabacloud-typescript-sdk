// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyStackConfig extends $dara.Model {
  /**
   * @example
   * format_version: IaCService/2021-08-06\\ndescription: create ALB\\nupstream_input:\\n  - name: stack_network\\n ...
   */
  componentContent?: string;
  /**
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
  config?: GetStackResponseBodyStackConfig;
  /**
   * @example
   * 2025-07-24T02:58:53Z
   */
  createTime?: string;
  /**
   * @example
   * v1
   */
  currentConfigVersion?: string;
  /**
   * @example
   * the description of stack
   */
  description?: string;
  /**
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @example
   * TestIacRole
   */
  ramRole?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @example
   * stack-as1d4vld898ppnqxxxxxx
   */
  stackId?: string;
  /**
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @example
   * SetUpdated
   */
  triggerStrategy?: string;
  /**
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
   * @example
   * C7070EC3-DF66-58BA-A1DD-A8574FF53143
   */
  requestId?: string;
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

