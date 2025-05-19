// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourceFeatureViewsResponseBodyTotalUsageStatisticsTotalReadWriteCount extends $dara.Model {
  /**
   * @example
   * 2025-03-18T00:00:00+08:00
   */
  date?: string;
  /**
   * @example
   * 456
   */
  totalReadCount?: number;
  /**
   * @example
   * 123
   */
  totalWriteCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      totalReadCount: 'TotalReadCount',
      totalWriteCount: 'TotalWriteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      totalReadCount: 'number',
      totalWriteCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

