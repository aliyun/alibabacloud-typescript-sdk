// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleAclOnObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the object.
   * 
   * This parameter is required.
   * 
   * @example
   * tableA
   */
  objectName?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * This parameter is required.
   * 
   * @example
   * table
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

