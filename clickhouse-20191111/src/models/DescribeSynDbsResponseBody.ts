// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynDbsResponseBodySynDbs extends $dara.Model {
  /**
   * @remarks
   * - This parameter is not returned if **SynStatus** is **true**.
   * 
   * - If **SynStatus** is **false**, this parameter indicates the reason for the synchronization failure.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.118.132, port: 49670; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-wz9d11qg1j0h4****
   */
  rdsId?: string;
  /**
   * @remarks
   * The database account for the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * test
   */
  rdsUserName?: string;
  /**
   * @remarks
   * The internal endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-bp16t9h3999xb0a711****.mysql.rds.aliyuncs.com:3306
   */
  rdsVpcUrl?: string;
  /**
   * @remarks
   * The database in the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * database
   */
  synDb?: string;
  /**
   * @remarks
   * Indicates whether the synchronization was successful. Valid values:
   * 
   * - **true**: The synchronization was successful.
   * 
   * - **false**: The synchronization failed.
   * 
   * @example
   * true
   */
  synStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      rdsId: 'RdsId',
      rdsUserName: 'RdsUserName',
      rdsVpcUrl: 'RdsVpcUrl',
      synDb: 'SynDb',
      synStatus: 'SynStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      rdsId: 'string',
      rdsUserName: 'string',
      rdsVpcUrl: 'string',
      synDb: 'string',
      synStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7655F5F9-1313-5ABA-8516-F6EB79605A5F
   */
  requestId?: string;
  /**
   * @remarks
   * The synchronized data.
   */
  synDbs?: DescribeSynDbsResponseBodySynDbs[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      synDbs: 'SynDbs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      synDbs: { 'type': 'array', 'itemType': DescribeSynDbsResponseBodySynDbs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.synDbs)) {
      $dara.Model.validateArray(this.synDbs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

