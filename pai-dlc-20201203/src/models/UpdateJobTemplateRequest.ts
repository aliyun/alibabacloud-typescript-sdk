// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The field constraint rules. The key is a JSONPath expression, and the value is the constraint type: locked (cannot be overridden), overridable (can be overridden), or required (required). This parameter must be provided together with Content and cannot be updated separately.
   * 
   * @example
   * {\\"JobSpecs[0].Image\\":\\"locked\\",\\"UserCommand\\":\\"locked\\",\\"JobType\\":\\"locked\\"}
   */
  constraints?: { [key: string]: any };
  /**
   * @remarks
   * The configuration content of the job template. It supports all parameter fields of the CreateJob operation and must be passed in JSON format. A new version is created when this parameter is provided.
   * 
   * @example
   * {\\"WorkspaceId\\":\\"15****05\\",\\"JobType\\":\\"PyTorchJob\\",\\"UserCommand\\":\\"echo hello\\",\\"JobSpecs\\":[{\\"Type\\":\\"Worker\\",\\"PodCount\\":1,\\"Image\\":\\"dsw-registry-vpc.cn-hangzhou.cr.aliyuncs.com/pai/pytorch:2.8.0-gpu-py313-cu129-ubuntu22.04-3995b779-1764361782\\",\\"EcsSpec\\":\\"ecs.gn7i-c8g1.2xlarge\\"}],\\"ResourceType\\":\\"ECS\\",\\"_ResourcePaymentType\\":\\"PostPaid\\",\\"CredentialConfig\\":{\\"EnableCredentialInject\\":false},\\"Accessibility\\":\\"PRIVATE\\",\\"Settings\\":{\\"JobReservedMinutes\\":0,\\"Tags\\":{}}}
   */
  content?: string;
  /**
   * @remarks
   * The description of the job template.
   * 
   * @example
   * Template description
   */
  description?: string;
  /**
   * @remarks
   * The user-defined key-value metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to set the new version as the default version when a new version is created.
   * 
   * @example
   * true
   */
  setAsDefault?: boolean;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @remarks
   * The invalid field.
   * 
   * @example
   * Invalid field
   */
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

