// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDBsResponseBodyDataDb extends $dara.Model {
  /**
   * @remarks
   * The time when the database is created. The value of this parameter is a UNIX timestamp. Unit: ms.
   * 
   * @example
   * 1563773824000
   */
  createTime?: string;
  /**
   * @remarks
   * The type of the database. Valid values: **RDS** and **POLARDB**.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The partitioning mode of the database. Valid values:
   * 
   * *   **HORIZONTAL**: The database is horizontally partitioned.
   * *   **VERTICAL**: The database is vertically partitioned.
   * 
   * @example
   * HORIZONTAL
   */
  mode?: string;
  /**
   * @remarks
   * The schema ID that is assigned to the partitioned database.
   * 
   * @example
   * drds_test_1563773871118kxqd
   */
  schema?: string;
  /**
   * @remarks
   * The state of the database.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      mode: 'Mode',
      schema: 'Schema',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbInstType: 'string',
      dbName: 'string',
      mode: 'string',
      schema: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBodyData extends $dara.Model {
  db?: DescribeDrdsDBsResponseBodyDataDb[];
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: { 'type': 'array', 'itemType': DescribeDrdsDBsResponseBodyDataDb },
    };
  }

  validate() {
    if(Array.isArray(this.db)) {
      $dara.Model.validateArray(this.db);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned databases.
   */
  data?: DescribeDrdsDBsResponseBodyData;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of databases returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 006B7D19-8CDB-4AA6-AAE7-23C107GS3W2T
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of returned databases.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBsResponseBodyData,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

