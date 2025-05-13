// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataStreamsResponseBodyHeaders extends $dara.Model {
  /**
   * @example
   * 100
   */
  xManagedCount?: number;
  /**
   * @example
   * 143993923932990
   */
  xManagedStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedCount: 'X-Managed-Count',
      xManagedStorageSize: 'X-Managed-StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedCount: 'number',
      xManagedStorageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

