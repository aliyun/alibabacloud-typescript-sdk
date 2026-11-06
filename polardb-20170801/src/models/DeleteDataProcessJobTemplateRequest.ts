// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataProcessJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the template is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the task template to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * tpl-123456
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

