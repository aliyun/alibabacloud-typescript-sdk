// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateStep extends $dara.Model {
  /**
   * @remarks
   * The list of step parameters.
   */
  args?: string[];
  /**
   * @remarks
   * The step type.
   * 
   * @example
   * RUN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

