// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersResponseBodyUsersExternalInfo extends $dara.Model {
  /**
   * @remarks
   * The account that is associated with the convenience user.
   * 
   * @example
   * test
   */
  externalName?: string;
  /**
   * @remarks
   * The account, student ID, or employee ID that is associated with the convenience user.
   * 
   * @example
   * 030801
   */
  jobNumber?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      jobNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

