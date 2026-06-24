// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKeystoresRequest extends $dara.Model {
  /**
   * @remarks
   * Delete keystore configuration
   */
  remove?: string[];
  /**
   * @remarks
   * Add or update keystore
   */
  update?: { [key: string]: string };
  /**
   * @remarks
   * Whether to force the change. false: non-forced, true: forced
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

