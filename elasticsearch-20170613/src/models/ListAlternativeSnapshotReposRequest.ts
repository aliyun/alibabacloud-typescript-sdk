// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlternativeSnapshotReposRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to return the OSS reference repository added. The return value. Valid values: true and false.
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

