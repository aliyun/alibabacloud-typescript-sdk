// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySandboxTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs for sandboxes created from this template. Valid values: 1 to 4.
   * 
   * @example
   * 1
   */
  defaultCpu?: string;
  /**
   * @remarks
   * The memory size for sandboxes created from this template. Unit: Gi. Valid values: 1Gi to 8Gi.
   * 
   * @example
   * 1Gi
   */
  defaultMemory?: string;
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
   * The initial number of instances. Valid values: 1 to 1000.
   * 
   * @example
   * 2
   */
  replicas?: number;
  tagsShrink?: string;
  /**
   * @remarks
   * The sandbox template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop-xxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpu: 'DefaultCpu',
      defaultMemory: 'DefaultMemory',
      image: 'Image',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      replicas: 'Replicas',
      tagsShrink: 'Tags',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpu: 'string',
      defaultMemory: 'string',
      image: 'string',
      instanceName: 'string',
      regionId: 'string',
      replicas: 'number',
      tagsShrink: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

