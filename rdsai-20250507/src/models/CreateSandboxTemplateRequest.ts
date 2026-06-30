// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSandboxTemplateRequest extends $dara.Model {
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
   * @example
   * code-interpreter
   */
  description?: string;
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
   * 1
   */
  replicas?: number;
  /**
   * @remarks
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
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      replicas: 'Replicas',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpu: 'string',
      defaultMemory: 'string',
      description: 'string',
      instanceName: 'string',
      regionId: 'string',
      replicas: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

