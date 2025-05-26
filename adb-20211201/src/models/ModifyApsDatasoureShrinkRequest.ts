// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsDatasoureShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  datasourceDescription?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The information about the Kafka instance.
   * 
   * @example
   * -
   */
  kafkaInfoShrink?: string;
  /**
   * @remarks
   * The lakehouse ID.
   * 
   * @example
   * 123
   */
  lakehouseIdShrink?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  polarDBMysqlInfoShrink?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
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
   * The information about Simple Log Service (SLS).
   * 
   * @example
   * -
   */
  slsInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasourceDescription: 'DatasourceDescription',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      kafkaInfoShrink: 'KafkaInfo',
      lakehouseIdShrink: 'LakehouseId',
      polarDBMysqlInfoShrink: 'PolarDBMysqlInfo',
      rdsMysqlInfoShrink: 'RdsMysqlInfo',
      regionId: 'RegionId',
      slsInfoShrink: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasourceDescription: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      kafkaInfoShrink: 'string',
      lakehouseIdShrink: 'string',
      polarDBMysqlInfoShrink: 'string',
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

