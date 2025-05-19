// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatisticsReadWriteCount extends $dara.Model {
  /**
   * @example
   * 2025-03-18T00:00:00+08:00
   */
  date?: string;
  /**
   * @example
   * 200
   */
  readCount?: number;
  /**
   * @example
   * 100
   */
  writeCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      readCount: 'ReadCount',
      writeCount: 'WriteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      readCount: 'number',
      writeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

