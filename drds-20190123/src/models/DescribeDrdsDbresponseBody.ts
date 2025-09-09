// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDBResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the time when the database was created. The value is in the UNIX timestamp format. Unit: ms.
   * 
   * @example
   * 1602050276000
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates the storage type of the database.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Indicates the name of the database.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the type of the instance in which the database is deployed. Valid values:
   * 
   * *   **MASTER**: The instance is a primary instance.
   * *   **SLAVE**: The instance is a read-only instance.
   * 
   * @example
   * MASTER
   */
  instRole?: string;
  /**
   * @remarks
   * Indicates the database sharding method.
   * 
   * *   **HORIZONTAL**: The database is horizontally sharded.
   * *   **VERTICAL**: The database is vertically sharded.
   * 
   * @example
   * HORIZONTAL
   */
  mode?: string;
  /**
   * @remarks
   * Indicates the schema name of the database.
   * 
   * @example
   * db_test*******************
   */
  schema?: string;
  /**
   * @remarks
   * Indicates the state of the database. Valid values:
   * 
   * *   **TO_BE_INIT**: The database is being created.
   * *   **NORMAL**: The database is running.
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
      instRole: 'InstRole',
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
      instRole: 'string',
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

export class DescribeDrdsDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the details about the database.
   */
  data?: DescribeDrdsDBResponseBodyData;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 58FB0EC7-CF71-4E48-92FB-CF070D******
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

