// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleAclOnObjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  objectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'objectName',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

