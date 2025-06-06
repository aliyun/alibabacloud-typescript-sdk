// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLibraryRequestIndexSettingModelConfig extends $dara.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

