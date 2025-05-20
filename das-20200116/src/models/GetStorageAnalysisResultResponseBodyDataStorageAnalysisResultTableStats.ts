// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats extends $dara.Model {
  /**
   * @remarks
   * The average length of rows. Unit: bytes.
   * 
   * @example
   * 154
   */
  avgRowLength?: number;
  /**
   * @remarks
   * The size of space fragments. Unit: bytes.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters. The fragmentation rate of a table is generally calculated based on the following formula: `Fragmentation rate = DataFree/(DataSize + IndexSize + DataFree)`. In this topic, `Fragmentation rate = DataFree/PhyTotalSize`.
   * 
   * @example
   * 7340032
   */
  dataFree?: number;
  /**
   * @remarks
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this parameter indicates the amount of space occupied by data. Unit: bytes.
   * *   For ApsaraDB for MongoDB instances, this parameter indicates the size of uncompressed data, that is, the amount of data. Unit: bytes.
   * 
   * @example
   * 1982857216
   */
  dataSize?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  dbName?: string;
  /**
   * @remarks
   * The type of the storage engine used by the table.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * @example
   * InnoDB
   */
  engine?: string;
  /**
   * @remarks
   * The size of space that can be reclaimed. Unit: bytes.
   * 
   * >  This parameter is applicable only to ApsaraDB for MongoDB instances. `Fragmentation rate = FragmentSize/PhyTotalSize`.
   * 
   * @example
   * 362221568
   */
  fragmentSize?: number;
  /**
   * @remarks
   * The storage space occupied by indexes. Unit: bytes.
   * 
   * @example
   * 1022296064
   */
  indexSize?: number;
  /**
   * @remarks
   * The storage space of the table. Unit: bytes.
   * 
   * >  For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, the value of the parameter is the sum of **DataSize**, **IndexSize**, and **DataFree**. For ApsaraDB for MongoDB instances, the value of this parameter is the sum of **DataSize** and **IndexSize**.
   * 
   * @example
   * 3012493312
   */
  phyTotalSize?: number;
  /**
   * @remarks
   * The physical file size of the table. Unit: bytes.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters. Data of specific database instances cannot be obtained due to deployment mode.
   * 
   * @example
   * 3057655808
   */
  physicalFileSize?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 12794732
   */
  tableRows?: number;
  /**
   * @remarks
   * The type of the table.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * @example
   * BASE TABLE
   */
  tableType?: string;
  /**
   * @remarks
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this parameter indicates the amount of space occupied by table data and indexes. Unit: bytes. The value is the sum of **DataSize** and **IndexSize**.
   * *   For ApsaraDB for MongoDB instances, this parameter indicates the actual size of space allocated by Block Manager. Unit: Bytes. The compression ratio of an ApsaraDB for MongoDB instance is calculated based on the following formula: `Compression ratio = TotalSize/DataSize`.
   * 
   * @example
   * 3005153280
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      avgRowLength: 'AvgRowLength',
      dataFree: 'DataFree',
      dataSize: 'DataSize',
      dbName: 'DbName',
      engine: 'Engine',
      fragmentSize: 'FragmentSize',
      indexSize: 'IndexSize',
      phyTotalSize: 'PhyTotalSize',
      physicalFileSize: 'PhysicalFileSize',
      tableName: 'TableName',
      tableRows: 'TableRows',
      tableType: 'TableType',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRowLength: 'number',
      dataFree: 'number',
      dataSize: 'number',
      dbName: 'string',
      engine: 'string',
      fragmentSize: 'number',
      indexSize: 'number',
      phyTotalSize: 'number',
      physicalFileSize: 'number',
      tableName: 'string',
      tableRows: 'number',
      tableType: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

