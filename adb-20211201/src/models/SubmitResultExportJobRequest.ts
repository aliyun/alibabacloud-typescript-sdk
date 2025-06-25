// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitResultExportJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp10a0ng21t5****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The engine that is used to run the result set export job. Set the value to XIHE.
   * 
   * @example
   * XIHE
   */
  engine?: string;
  /**
   * @remarks
   * The type of the result set export job.
   * 
   * @example
   * SLS
   */
  exportType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource group that runs the result set export job.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The SQL statement that is used in the result set export job. You can specify only SELECT statements. If you specify other SQL statements, the request fails.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM `fotor_com_datastore_resource`.`fotor_ai_create_task` where `date` = \\"2023-05-13\\" LIMIT 10;
   */
  SQL?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * tpch_oss
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      exportType: 'ExportType',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      SQL: 'SQL',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
      exportType: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      SQL: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

