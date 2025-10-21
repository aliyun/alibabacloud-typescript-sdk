// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFolderHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c96306e2b****
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

