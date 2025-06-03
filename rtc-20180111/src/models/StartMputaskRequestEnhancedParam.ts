// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMPUTaskRequestEnhancedParam extends $dara.Model {
  /**
   * @example
   * false
   */
  enablePortraitSegmentation?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePortraitSegmentation: 'EnablePortraitSegmentation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePortraitSegmentation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

