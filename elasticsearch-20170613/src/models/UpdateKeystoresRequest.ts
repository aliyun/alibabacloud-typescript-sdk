// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKeystoresRequest extends $dara.Model {
  /**
   * @remarks
   * Removes keystore configurations.
   */
  remove?: string[];
  /**
   * @remarks
   * Adds or updates the keystore.
   */
  update?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to forcibly apply the change. Valid values:
   * 
   * - false: The change is not forcibly applied.
   * - true: The change is forcibly applied.
   * 
   * @example
   * false
   */
  force?: string;
  static names(): { [key: string]: string } {
    return {
      remove: 'remove',
      update: 'update',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remove: { 'type': 'array', 'itemType': 'string' },
      update: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      force: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remove)) {
      $dara.Model.validateArray(this.remove);
    }
    if(this.update) {
      $dara.Model.validateMap(this.update);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

