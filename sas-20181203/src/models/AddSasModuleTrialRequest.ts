// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSasModuleTrialRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The code of the feature. Valid values:
   * 
   * *   **vulFix**: vulnerability fixing.
   * *   **cloudSiem**: threat analysis and response.
   * 
   * @example
   * vulFix
   */
  moduleCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      moduleCode: 'ModuleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      moduleCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

