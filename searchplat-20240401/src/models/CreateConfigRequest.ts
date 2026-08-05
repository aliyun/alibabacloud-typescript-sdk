// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   */
  configData?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether the request is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      configData: 'configData',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.configData) {
      $dara.Model.validateMap(this.configData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

