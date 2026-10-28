// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelRunRequest extends $dara.Model {
  /**
   * @remarks
   * The reason for the cancellation. The value must be 1 to 1,024 characters in length.
   * 
   * @example
   * The user manually canceled this task
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

