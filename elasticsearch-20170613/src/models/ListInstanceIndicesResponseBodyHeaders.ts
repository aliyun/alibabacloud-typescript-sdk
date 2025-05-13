// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceIndicesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The details of the index list.
   * 
   * @example
   * 15
   */
  xManagedCount?: number;
  /**
   * @remarks
   * The total number of indexes in the OpenStore cold phase.
   * 
   * @example
   * 18093942932
   */
  xManagedStorageSize?: number;
  /**
   * @remarks
   * The time when the index list was queried.
   * 
   * @example
   * 5
   */
  xOSSCount?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 9093942932
   */
  xOSSStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedCount: 'X-Managed-Count',
      xManagedStorageSize: 'X-Managed-StorageSize',
      xOSSCount: 'X-OSS-Count',
      xOSSStorageSize: 'X-OSS-StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedCount: 'number',
      xManagedStorageSize: 'number',
      xOSSCount: 'number',
      xOSSStorageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

