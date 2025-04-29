// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarSceneQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * travel
   */
  scenarioTemplateId?: string;
  scenarioTemplateName?: string;
  /**
   * @example
   * ACTIVATE
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioTemplateId: 'scenarioTemplateId',
      scenarioTemplateName: 'scenarioTemplateName',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioTemplateId: 'string',
      scenarioTemplateName: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

