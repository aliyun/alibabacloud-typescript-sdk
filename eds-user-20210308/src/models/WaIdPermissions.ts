// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WaIdPermissions extends $dara.Model {
  /**
   * @remarks
   * code
   */
  code?: string;
  /**
   * @remarks
   * basic
   */
  isBasicChild?: boolean;
  /**
   * @remarks
   * name
   */
  name?: string;
  /**
   * @remarks
   * subPermissions
   */
  subPermissions?: WaIdPermissions[];
  /**
   * @remarks
   * type
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isBasicChild: 'IsBasicChild',
      name: 'Name',
      subPermissions: 'SubPermissions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isBasicChild: 'boolean',
      name: 'string',
      subPermissions: { 'type': 'array', 'itemType': WaIdPermissions },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subPermissions)) {
      $dara.Model.validateArray(this.subPermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

