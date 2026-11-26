// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySandboxTemplateShrinkRequest extends $dara.Model {
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
   * The default disk space for sandboxes created by using this template.
   * 
   * @example
   * 30Gi
   */
  defaultDisk?: string;
  /**
   * @remarks
   * The memory size for sandboxes created by using this template. Unit: GiB. Valid values: 1 to 8.
   * 
   * @example
   * 1Gi
   */
  defaultMemory?: string;
  /**
   * @remarks
   * The container image used by the sandbox template. Format: `[registry/]<repo>[:tag][@sha256:digest]`.
   * 
   * @example
   * registry.example.com/example/sandbox:1.0
   */
  image?: string;
  /**
   * @remarks
   * The ID of the AI application instance.
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
  /**
   * @remarks
   * The custom tags of the sandbox template. The key is the tag name, and the value is the tag value. You cannot use the system-reserved tags createdBy and hidden.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The ID of the sandbox template.
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
      defaultDisk: 'DefaultDisk',
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
      defaultDisk: 'string',
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

