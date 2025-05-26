// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSparkTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application template is created. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  succeeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeeded: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

