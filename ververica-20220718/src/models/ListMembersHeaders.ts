// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspace: 'string',
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

