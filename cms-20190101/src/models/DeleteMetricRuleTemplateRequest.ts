// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetricRuleTemplateRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * This parameter is required.
   * 
   * @example
   * 123****
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

