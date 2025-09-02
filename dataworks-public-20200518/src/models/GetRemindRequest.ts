// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRemindRequest extends $dara.Model {
  /**
   * @remarks
   * The custom alert rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  remindId?: number;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

