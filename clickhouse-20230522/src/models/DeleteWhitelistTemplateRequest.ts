// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWhitelistTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The whitelist template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 98a6d3db05984dca
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the whitelist template.
   * 
   * @example
   * 98a6d3db05984dca
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateId: 'string',
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

