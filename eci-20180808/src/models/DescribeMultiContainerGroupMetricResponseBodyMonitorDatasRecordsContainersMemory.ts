// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory extends $dara.Model {
  /**
   * @remarks
   * The size of the available memory. Unit: bytes.
   * 
   * @example
   * 4285091840
   */
  availableBytes?: number;
  /**
   * @remarks
   * The size of the cache. Unit: bytes.
   * 
   * @example
   * 9289728
   */
  cache?: number;
  /**
   * @remarks
   * The size of the resident memory set, which indicates the size of the physical memory that is actually used. Unit: bytes.
   * 
   * @example
   * 9289728
   */
  rss?: number;
  /**
   * @remarks
   * The size of the used memory. Unit: bytes.
   * 
   * @example
   * 9289728
   */
  usageBytes?: number;
  /**
   * @remarks
   * The usage of the working set. Unit: bytes.
   * 
   * @example
   * 9289728
   */
  workingSet?: number;
  static names(): { [key: string]: string } {
    return {
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableBytes: 'number',
      cache: 'number',
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

