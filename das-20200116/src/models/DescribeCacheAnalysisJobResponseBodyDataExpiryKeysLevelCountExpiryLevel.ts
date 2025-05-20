// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel extends $dara.Model {
  /**
   * @remarks
   * The time when the cache analysis task was complete. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1717469347000
   */
  analysisTs?: number;
  /**
   * @remarks
   * The expiration level. Valid values:
   * 
   * *   **0**: The key never expires.
   * *   **1**: The key has expired.
   * *   **2**: The key has expired for 0 to 1 hour.
   * *   **3**: The key has expired for 1 to 3 hours.
   * *   **4**: The key has expired for 3 to 12 hours.
   * *   **5**: The key has expired for 12 to 24 hours.
   * *   **6**: The key has expired for one to two days.
   * *   **7**: The key has expired for three to seven days.
   * *   **8**: The key has expired for more than seven days.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The number of bytes occupied by the keys that have expired.
   * 
   * @example
   * 8064
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total number of the keys that have expired.
   * 
   * @example
   * 62
   */
  totalKeys?: number;
  static names(): { [key: string]: string } {
    return {
      analysisTs: 'AnalysisTs',
      level: 'Level',
      totalBytes: 'TotalBytes',
      totalKeys: 'TotalKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTs: 'number',
      level: 'number',
      totalBytes: 'number',
      totalKeys: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

