// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems extends $dara.Model {
  /**
   * @remarks
   * Available capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61360
   */
  availableSize?: number;
  /**
   * @remarks
   * Total capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61440
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      availableSize: 'AvailableSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

