// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestorableTenantsResponseBodyTenantsTimeIntervalList extends $dara.Model {
  /**
   * @remarks
   * The end time of the restorable period.
   * 
   * @example
   * 2023-03-13T02:43:03Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the restore is based on archiving.
   * 
   * @example
   * true
   */
  fromArchive?: boolean;
  /**
   * @remarks
   * The start time of the restorable period.
   * 
   * @example
   * 2023-01-20T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage type of backup data.
   * 
   * @example
   * standard
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fromArchive: 'FromArchive',
      startTime: 'StartTime',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fromArchive: 'boolean',
      startTime: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

