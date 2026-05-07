// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * 字段约束规则。Key 为 JSONPath 表达式，Value 为约束类型：locked（锁定不可覆盖）、overridable（可覆盖）、required（必填）。需与 Content 同时提供，不允许单独更新。
   * 
   * @example
   * {\\"JobSpecs[0].Image\\":\\"locked\\",\\"UserCommand\\":\\"locked\\",\\"JobType\\":\\"locked\\"}
   */
  constraints?: { [key: string]: any };
  /**
   * @remarks
   * 任务模板的配置内容，支持 CreateJob 接口的所有参数字段，以 JSON 格式传入。提供时会创建新版本。
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
   * 当创建了新版本时，是否将新版本设为默认版本。
   * 
   * @example
   * true
   */
  setAsDefault?: boolean;
  /**
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      content: 'Content',
      description: 'Description',
      metadata: 'Metadata',
      setAsDefault: 'SetAsDefault',
      templateName: 'TemplateName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
      description: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      setAsDefault: 'boolean',
      templateName: 'string',
      version: 'number',
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

