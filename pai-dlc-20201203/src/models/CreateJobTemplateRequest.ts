// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * 字段约束规则。Key 为 JSONPath 表达式，Value 为约束类型：locked（锁定不可覆盖）、overridable（可覆盖）、required（必填）。
   * 
   * @example
   * {\\"JobSpecs[0].Image\\":\\"locked\\",\\"UserCommand\\":\\"locked\\",\\"JobType\\":\\"locked\\"}
   */
  constraints?: { [key: string]: any };
  /**
   * @remarks
   * 任务模板的配置内容，包含作业配置参数，以 JSON 格式传入。
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"WorkspaceId\\":\\"15****05\\",\\"JobType\\":\\"PyTorchJob\\",\\"UserCommand\\":\\"echo hello\\",\\"JobSpecs\\":[{\\"Type\\":\\"Worker\\",\\"PodCount\\":1,\\"Image\\":\\"dsw-registry-vpc.cn-hangzhou.cr.aliyuncs.com/pai/pytorch:2.8.0-gpu-py313-cu129-ubuntu22.04-3995b779-1764361782\\",\\"EcsSpec\\":\\"ecs.gn7i-c8g1.2xlarge\\"}],\\"ResourceType\\":\\"ECS\\",\\"_ResourcePaymentType\\":\\"PostPaid\\",\\"CredentialConfig\\":{\\"EnableCredentialInject\\":false},\\"Accessibility\\":\\"PRIVATE\\",\\"Settings\\":{\\"JobReservedMinutes\\":0,\\"Tags\\":{}}}
   */
  content?: string;
  /**
   * @example
   * Template description
   */
  description?: string;
  /**
   * @remarks
   * 用户自定义的键值对元数据，用于存储模板的附加信息。
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @remarks
   * 工作空间 ID。如何获取工作空间 ID，请参见 ListWorkspaces。
   * 
   * This parameter is required.
   * 
   * @example
   * 15****05
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      content: 'Content',
      description: 'Description',
      metadata: 'Metadata',
      templateName: 'TemplateName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
      description: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.constraints) {
      $dara.Model.validateMap(this.constraints);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

