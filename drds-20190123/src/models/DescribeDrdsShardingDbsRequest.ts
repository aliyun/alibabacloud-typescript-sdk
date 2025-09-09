// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsShardingDbsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database whose shards you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The matching pattern of the database name.
   * 
   * @example
   * test
   */
  dbNamePattern?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance whose database shards you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgaf3c63qbo
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of database shards returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbNamePattern: 'DbNamePattern',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbNamePattern: 'string',
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

