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
   * The Databricks data source information.
   * 
   * @example
   * -
   */
  databricksInfoShrink?: string;
  /**
   * @remarks
   * The data source description.
   * 
   * @example
   * description
   */
  datasourceDescription?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * This parameter is required.
   * 
   * @example
   * KAFKA
   */
  datasourceType?: string;
  /**
   * @remarks
   * The Hive data source information.
   * 
   * @example
   * -
   */
  hiveInfoShrink?: string;
  /**
   * @remarks
   * The Kafka information.
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
   * The PolarDB for MySQL data source information.
   * 
   * @example
   * -
   */
  polarDBMysqlInfoShrink?: string;
  /**
   * @remarks
   * The PolarDB-X data source information.
   * 
   * @example
   * -
   */
  polarDBXInfoShrink?: string;
  /**
   * @remarks
   * The ApsaraDB RDS for MySQL data source information.
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
   * The Simple Log Service (SLS) information for the data source to be created.
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

