// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoUpgradeRequest extends $dara.Model {
  /**
   * @example
   * auto
   */
  autoUpgrade?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'autoUpgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

