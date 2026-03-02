// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppVersionOpCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  appVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'appVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

