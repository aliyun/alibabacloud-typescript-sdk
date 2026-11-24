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
   * The data source description.
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
   * The data source name.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The Kafka data source information.
   * 
   * @example
   * {"KafkaTopic":"test-topic"}
   */
  kafkaInfoShrink?: string;
  /**
   * @remarks
   * The Lakehouse ID.
   * 
   * @example
   * {"VpcId":"vpc-******"}
   */
  lakehouseIdShrink?: string;
  /**
   * @remarks
   * The deprecated data source information.
   * 
   * @example
   * -
   */
  polarDBMysqlInfoShrink?: string;
  /**
   * @remarks
   * The deprecated data source information.
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
   * The Simple Log Service (SLS) information.
   * 
   * @example
   * {"Project":"example-project","Store":"example-logstore","Across":false}
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

