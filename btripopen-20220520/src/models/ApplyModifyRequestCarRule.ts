// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyModifyRequestCarRule extends $dara.Model {
  scenarioTemplateId?: string;
  scenarioTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioTemplateId: 'scenario_template_id',
      scenarioTemplateName: 'scenario_template_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioTemplateId: 'string',
      scenarioTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

