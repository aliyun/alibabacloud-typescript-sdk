// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The category. Only DataPrivacyConfig is supported.
   * 
   * @example
   * DataPrivacyConfig
   */
  categoryNames?: string;
  /**
   * @remarks
   * A collection of configuration keys. Only customizePAIAssumedRole is supported.
   * 
   * @example
   * customizePAIAssumedRole
   */
  configKeys?: string;
  static names(): { [key: string]: string } {
    return {
      categoryNames: 'CategoryNames',
      configKeys: 'ConfigKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryNames: 'string',
      configKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

