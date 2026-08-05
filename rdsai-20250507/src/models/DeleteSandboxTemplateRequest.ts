// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSandboxTemplateRequest extends $dara.Model {
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
   * The sandbox template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop-xxxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      regionId: 'string',
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

