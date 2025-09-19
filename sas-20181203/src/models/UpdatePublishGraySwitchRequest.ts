// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublishGraySwitchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the canary release feature. Valid values:
   * 
   * *   **1**: enabled.
   * *   **0**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  graySwitchStatus?: number;
  static names(): { [key: string]: string } {
    return {
      graySwitchStatus: 'GraySwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graySwitchStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

