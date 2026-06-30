// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySandboxTemplateRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  defaultCpu?: string;
  /**
   * @example
   * 1Gi
   */
  defaultMemory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
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
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      replicas: 'Replicas',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpu: 'string',
      defaultMemory: 'string',
      instanceName: 'string',
      regionId: 'string',
      replicas: 'number',
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

