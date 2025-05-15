// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentPlanTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * 315797
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

