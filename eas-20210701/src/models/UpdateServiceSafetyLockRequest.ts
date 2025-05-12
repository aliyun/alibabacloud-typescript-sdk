// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceSafetyLockRequest extends $dara.Model {
  /**
   * @remarks
   * The lock scope. Valid values:
   * 
   * *   all: locks all operations.
   * *   dangerous: locks dangerous operations such as delete and stop operations.
   * *   none: locks no operations.
   * 
   * This parameter is required.
   * 
   * @example
   * dangerous
   */
  lock?: string;
  static names(): { [key: string]: string } {
    return {
      lock: 'Lock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

