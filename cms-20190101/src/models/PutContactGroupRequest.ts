// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * This parameter is required.
   * 
   * @example
   * Attendance system group
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The name of the alert contact.
   */
  contactNames?: string[];
  /**
   * @remarks
   * The description of the alert contact group.
   * 
   * @example
   * Alert test
   */
  describe?: string;
  /**
   * @remarks
   * Specifies whether to enable the subscription feature. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableSubscribed?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactNames: 'ContactNames',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactNames: { 'type': 'array', 'itemType': 'string' },
      describe: 'string',
      enableSubscribed: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.contactNames)) {
      $dara.Model.validateArray(this.contactNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

