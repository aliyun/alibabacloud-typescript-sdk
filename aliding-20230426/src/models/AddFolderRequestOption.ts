// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddFolderRequestOptionAppProperties } from "./AddFolderRequestOptionAppProperties";


export class AddFolderRequestOption extends $dara.Model {
  appProperties?: AddFolderRequestOptionAppProperties[];
  /**
   * @example
   * AUTO_RENAME
   */
  conflictStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appProperties: 'AppProperties',
      conflictStrategy: 'ConflictStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appProperties: { 'type': 'array', 'itemType': AddFolderRequestOptionAppProperties },
      conflictStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appProperties)) {
      $dara.Model.validateArray(this.appProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

