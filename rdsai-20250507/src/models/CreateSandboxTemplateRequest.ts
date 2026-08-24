// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSandboxTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs for sandboxes created by using this template. Valid values: 1 to 4.
   * 
   * @example
   * 1
   */
  defaultCpu?: string;
  /**
   * @remarks
   * The memory size for sandboxes created by using this template. Unit: Gi. Valid values: 1Gi to 8Gi.
   * 
   * @example
   * 1Gi
   */
  defaultMemory?: string;
  /**
   * @remarks
   * The description of the sandbox template. The description must be unique within the VPC.
   * 
   * @example
   * code-interpreter
   */
  description?: string;
  image?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of prewarmed sandboxes. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  replicas?: number;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The name of the sandbox template.
   * 
   * This parameter is required.
   * 
   * @example
   * code-interpreter
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpu: 'DefaultCpu',
      defaultMemory: 'DefaultMemory',
      description: 'Description',
      image: 'Image',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      replicas: 'Replicas',
      tags: 'Tags',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpu: 'string',
      defaultMemory: 'string',
      description: 'string',
      image: 'string',
      instanceName: 'string',
      regionId: 'string',
      replicas: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

