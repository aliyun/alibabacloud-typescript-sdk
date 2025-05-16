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
  /**
   * @remarks
   * The scope. Valid values: subUser and owner.
   * 
   * @example
   * subUser
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

