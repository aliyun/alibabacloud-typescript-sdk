// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList extends $dara.Model {
  /**
   * @example
   * 20250528
   */
  date?: string;
  /**
   * @example
   * 300
   */
  longTermStorage?: number;
  /**
   * @example
   * GB
   */
  longTermStorageUnit?: string;
  /**
   * @example
   * 200
   */
  lowFreqStorage?: number;
  /**
   * @example
   * GB
   */
  lowFreqStorageUnit?: string;
  /**
   * @example
   * max_testproject
   */
  projectName?: string;
  /**
   * @example
   * 0.011872406445069006
   */
  rate?: number;
  /**
   * @example
   * 0
   */
  recycleBinStorage?: number;
  /**
   * @example
   * B
   */
  recycleBinStorageUnit?: string;
  /**
   * @example
   * 500
   */
  standardStorage?: number;
  /**
   * @example
   * GB
   */
  standardStorageUnit?: string;
  /**
   * @example
   * 1749105045512
   */
  timestamp?: number;
  /**
   * @example
   * 1
   */
  totalStorage?: number;
  /**
   * @example
   * TB
   */
  totalStorageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      longTermStorage: 'longTermStorage',
      longTermStorageUnit: 'longTermStorageUnit',
      lowFreqStorage: 'lowFreqStorage',
      lowFreqStorageUnit: 'lowFreqStorageUnit',
      projectName: 'projectName',
      rate: 'rate',
      recycleBinStorage: 'recycleBinStorage',
      recycleBinStorageUnit: 'recycleBinStorageUnit',
      standardStorage: 'standardStorage',
      standardStorageUnit: 'standardStorageUnit',
      timestamp: 'timestamp',
      totalStorage: 'totalStorage',
      totalStorageUnit: 'totalStorageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      longTermStorage: 'number',
      longTermStorageUnit: 'string',
      lowFreqStorage: 'number',
      lowFreqStorageUnit: 'string',
      projectName: 'string',
      rate: 'number',
      recycleBinStorage: 'number',
      recycleBinStorageUnit: 'string',
      standardStorage: 'number',
      standardStorageUnit: 'string',
      timestamp: 'number',
      totalStorage: 'number',
      totalStorageUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

