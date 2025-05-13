// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item keys. Currently, only customizePAIAssumedRole.
   * 
   * @example
   * tempStoragePath
   */
  configKey?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

