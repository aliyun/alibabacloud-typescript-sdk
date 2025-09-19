// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublishAutoUpgradeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic upgrade. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  autoUpgrade?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'AutoUpgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

