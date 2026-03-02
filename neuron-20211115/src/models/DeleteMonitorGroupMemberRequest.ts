// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  contactIds?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'contactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

