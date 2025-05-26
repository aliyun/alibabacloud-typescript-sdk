// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads } from "./DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads";


export class DescribeApsMigrationWorkloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried migration workloads.
   */
  migrationWorkloads?: DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-57F0-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      migrationWorkloads: 'MigrationWorkloads',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationWorkloads: { 'type': 'array', 'itemType': DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.migrationWorkloads)) {
      $dara.Model.validateArray(this.migrationWorkloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

