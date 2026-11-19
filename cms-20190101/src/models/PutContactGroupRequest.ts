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
   * Attendance System Group
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The names of the alert contacts.
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
   * Specifies whether to perform a dry run on the request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the subscription feature. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
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
      dryRun: 'DryRun',
      enableSubscribed: 'EnableSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactNames: { 'type': 'array', 'itemType': 'string' },
      describe: 'string',
      dryRun: 'boolean',
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

