// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm extends $dara.Model {
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last access time of data. N is specified by this parameter and corresponds to `LastAccessTime` that is configured for the table or partition.
   * 
   * >  If LastAccessTime of a table or partition is left empty, the following rules are applied:
   * 
   * *   For tables or partitions that you created before October 1, 2023, 2023.10.01 00:00:00 in UTC+0 is considered as the last access time.
   * 
   * *   For tables or partitions that you created on or after October 1, 2023, if no data is accessed, the table or partition creation time is considered as the last access time.
   * 
   * @example
   * 180
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last modification time of data. N is specified by this parameter and corresponds to `LastModifiedTime` that is configured for the table or partition.
   * 
   * @example
   * 180
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The period after the previous storage tier change time.
   * 
   * @example
   * 1
   */
  daysAfterLastTierModificationGreaterThan?: number;
  static names(): { [key: string]: string } {
    return {
      daysAfterLastAccessGreaterThan: 'DaysAfterLastAccessGreaterThan',
      daysAfterLastModificationGreaterThan: 'DaysAfterLastModificationGreaterThan',
      daysAfterLastTierModificationGreaterThan: 'DaysAfterLastTierModificationGreaterThan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysAfterLastAccessGreaterThan: 'number',
      daysAfterLastModificationGreaterThan: 'number',
      daysAfterLastTierModificationGreaterThan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

