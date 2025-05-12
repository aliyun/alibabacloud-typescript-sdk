// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersInGroupResponseBodyEndUsersExternalInfo extends $dara.Model {
  /**
   * @remarks
   * The external name.
   * 
   * @example
   * nameDemo
   */
  externalName?: string;
  /**
   * @remarks
   * The employee ID.
   * 
   * @example
   * 123
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

