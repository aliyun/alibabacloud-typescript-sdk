// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PersonReferenceConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable person referencing. Set to `true` to enable this feature. The default value is `false`.
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

