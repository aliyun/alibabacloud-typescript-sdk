// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleConfigStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The service modules that you want to query.
   * 
   * This parameter is required.
   */
  moduleNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      moduleNamesShrink: 'ModuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

