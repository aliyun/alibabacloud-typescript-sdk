// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRemindRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom alert rule.
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

