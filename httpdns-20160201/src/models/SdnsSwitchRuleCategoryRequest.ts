// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsSwitchRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: boolean;
  /**
   * @example
   * 123456789012345678
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

