// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupStatisticsResponseBodyRegionCountList extends $dara.Model {
  /**
   * @remarks
   * The number of database instances that are automatically scanned.
   * 
   * @example
   * 1
   */
  automaticCount?: string;
  /**
   * @remarks
   * The region ID of the database instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      automaticCount: 'AutomaticCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticCount: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of protected database instances.
   * 
   * @example
   * 1
   */
  protectedDatabaseCount?: number;
  /**
   * @remarks
   * The list of regions in which database instances can be configured.
   */
  regionCountList?: DescribeUniBackupStatisticsResponseBodyRegionCountList[];
  /**
   * @remarks
   * The ID of the request. The China Chinese Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DD****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of tasks that are being restored.
   * 
   * @example
   * 0
   */
  restoringTaskCount?: number;
  /**
   * @remarks
   * The number of recoverable database instances.
   * 
   * @example
   * 3
   */
  totalRecoverableCount?: number;
  /**
   * @remarks
   * The total number of restoration records.
   * 
   * @example
   * 10
   */
  totalRestoreTaskCount?: number;
  /**
   * @remarks
   * The number of unprotected database instances.
   * 
   * @example
   * 5
   */
  unprotectedDatabaseCount?: number;
  static names(): { [key: string]: string } {
    return {
      protectedDatabaseCount: 'ProtectedDatabaseCount',
      regionCountList: 'RegionCountList',
      requestId: 'RequestId',
      restoringTaskCount: 'RestoringTaskCount',
      totalRecoverableCount: 'TotalRecoverableCount',
      totalRestoreTaskCount: 'TotalRestoreTaskCount',
      unprotectedDatabaseCount: 'UnprotectedDatabaseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedDatabaseCount: 'number',
      regionCountList: { 'type': 'array', 'itemType': DescribeUniBackupStatisticsResponseBodyRegionCountList },
      requestId: 'string',
      restoringTaskCount: 'number',
      totalRecoverableCount: 'number',
      totalRestoreTaskCount: 'number',
      unprotectedDatabaseCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regionCountList)) {
      $dara.Model.validateArray(this.regionCountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

