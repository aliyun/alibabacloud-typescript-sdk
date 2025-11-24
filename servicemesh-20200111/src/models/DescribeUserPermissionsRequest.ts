// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a RAM user or RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * 27852573609480****
   */
  subAccountUserId?: string;
  static names(): { [key: string]: string } {
    return {
      subAccountUserId: 'SubAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subAccountUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

