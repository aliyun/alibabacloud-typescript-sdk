// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentConfiguration } from "./EnvironmentConfiguration";


export class UpdateFlowDraftInput extends $dara.Model {
  /**
   * @remarks
   * 工作流的 FDL 定义
   */
  definition?: string;
  /**
   * @remarks
   * 工作流的描述信息
   */
  description?: string;
  /**
   * @remarks
   * 工作流执行期间可以访问的环境变量配置，包含一组命名变量列表
   */
  environmentConfiguration?: EnvironmentConfiguration;
  /**
   * @remarks
   * 工作流执行时使用的 RAM 角色 ARN
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 工作流执行历史的外部存储位置
   */
  externalStorageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'definition',
      description: 'description',
      environmentConfiguration: 'environmentConfiguration',
      executionRoleArn: 'executionRoleArn',
      externalStorageLocation: 'externalStorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      environmentConfiguration: EnvironmentConfiguration,
      executionRoleArn: 'string',
      externalStorageLocation: 'string',
    };
  }

  validate() {
    if(this.environmentConfiguration && typeof (this.environmentConfiguration as any).validate === 'function') {
      (this.environmentConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

