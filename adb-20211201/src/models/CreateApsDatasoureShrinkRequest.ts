// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-xxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about the Databricks data source.
   * 
   * @example
   * -
   */
  databricksInfoShrink?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * description
   */
  datasourceDescription?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * KAFKA
   */
  datasourceType?: string;
  /**
   * @remarks
   * The information about the Hive data source.
   * 
   * @example
   * -
   */
  hiveInfoShrink?: string;
  /**
   * @remarks
   * The information about the source Apache Kafka instance.
   * 
   * @example
   * -
   */
  kafkaInfoShrink?: string;
  /**
   * @remarks
   * The mode.
   * 
   * @example
   * ALI_CLOUD_INSTANCE
   */
  mode?: string;
  /**
   * @remarks
   * The information about the source PolarDB for MySQL cluster.
   * 
   * @example
   * -
   */
  polarDBMysqlInfoShrink?: string;
  /**
   * @remarks
   * The information about the source PolarDB-X instance.
   * 
   * @example
   * -
   */
  polarDBXInfoShrink?: string;
  /**
   * @remarks
   * The information about the source ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * -
   */
  rdsMysqlInfoShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The information about the source Simple Log Service (SLS) instance or cluster.
   * 
   * @example
   * -
   */
  slsInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      databricksInfoShrink: 'DatabricksInfo',
      datasourceDescription: 'DatasourceDescription',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      hiveInfoShrink: 'HiveInfo',
      kafkaInfoShrink: 'KafkaInfo',
      mode: 'Mode',
      polarDBMysqlInfoShrink: 'PolarDBMysqlInfo',
      polarDBXInfoShrink: 'PolarDBXInfo',
      rdsMysqlInfoShrink: 'RdsMysqlInfo',
      regionId: 'RegionId',
      slsInfoShrink: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      databricksInfoShrink: 'string',
      datasourceDescription: 'string',
      datasourceName: 'string',
      datasourceType: 'string',
      hiveInfoShrink: 'string',
      kafkaInfoShrink: 'string',
      mode: 'string',
      polarDBMysqlInfoShrink: 'string',
      polarDBXInfoShrink: 'string',
      rdsMysqlInfoShrink: 'string',
      regionId: 'string',
      slsInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

