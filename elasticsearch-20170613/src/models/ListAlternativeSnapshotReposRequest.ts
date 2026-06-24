// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlternativeSnapshotReposRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the OSS reference repositories that have already been added. Valid values:
   * 
   * - true (default): Returns the already added repositories.
   * - false: Does not return the already added repositories.
   * 
   * @example
   * true
   */
  alreadySetItems?: boolean;
  static names(): { [key: string]: string } {
    return {
      alreadySetItems: 'alreadySetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadySetItems: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

