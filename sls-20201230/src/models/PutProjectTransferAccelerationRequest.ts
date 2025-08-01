// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutProjectTransferAccelerationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

