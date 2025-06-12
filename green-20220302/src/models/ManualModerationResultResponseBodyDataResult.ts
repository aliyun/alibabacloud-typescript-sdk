// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Label description
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * Risk label
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

