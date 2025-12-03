// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserPrimaryOrganizationalUnitHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Bearer xxxx
   */
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

