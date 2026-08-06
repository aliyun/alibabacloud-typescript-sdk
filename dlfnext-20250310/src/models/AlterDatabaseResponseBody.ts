// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The items that remain unchanged.
   */
  missing?: string[];
  /**
   * @remarks
   * The deleted items.
   */
  removed?: string[];
  /**
   * @remarks
   * The updated items.
   */
  updated?: string[];
  static names(): { [key: string]: string } {
    return {
      missing: 'missing',
      removed: 'removed',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missing: { 'type': 'array', 'itemType': 'string' },
      removed: { 'type': 'array', 'itemType': 'string' },
      updated: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.missing)) {
      $dara.Model.validateArray(this.missing);
    }
    if(Array.isArray(this.removed)) {
      $dara.Model.validateArray(this.removed);
    }
    if(Array.isArray(this.updated)) {
      $dara.Model.validateArray(this.updated);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

