// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApsDatasoureRequestDatabricksInfo } from "./CreateApsDatasoureRequestDatabricksInfo";
import { CreateApsDatasoureRequestHiveInfo } from "./CreateApsDatasoureRequestHiveInfo";
import { CreateApsDatasoureRequestKafkaInfo } from "./CreateApsDatasoureRequestKafkaInfo";
import { CreateApsDatasoureRequestPolarDBMysqlInfo } from "./CreateApsDatasoureRequestPolarDbmysqlInfo";
import { CreateApsDatasoureRequestPolarDBXInfo } from "./CreateApsDatasoureRequestPolarDbxinfo";
import { CreateApsDatasoureRequestRdsMysqlInfo } from "./CreateApsDatasoureRequestRdsMysqlInfo";
import { CreateApsDatasoureRequestSlsInfo } from "./CreateApsDatasoureRequestSlsInfo";


export class CreateApsDatasoureRequest extends $dara.Model {
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
  databricksInfo?: CreateApsDatasoureRequestDatabricksInfo;
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
  hiveInfo?: CreateApsDatasoureRequestHiveInfo;
  /**
   * @remarks
   * The information about the source Apache Kafka instance.
   * 
   * @example
   * -
   */
  kafkaInfo?: CreateApsDatasoureRequestKafkaInfo;
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
  polarDBMysqlInfo?: CreateApsDatasoureRequestPolarDBMysqlInfo;
  /**
   * @remarks
   * The information about the source PolarDB-X instance.
   * 
   * @example
   * -
   */
  polarDBXInfo?: CreateApsDatasoureRequestPolarDBXInfo;
  /**
   * @remarks
   * The information about the source ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * -
   */
  rdsMysqlInfo?: CreateApsDatasoureRequestRdsMysqlInfo;
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
  slsInfo?: CreateApsDatasoureRequestSlsInfo;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      databricksInfo: 'DatabricksInfo',
      datasourceDescription: 'DatasourceDescription',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      hiveInfo: 'HiveInfo',
      kafkaInfo: 'KafkaInfo',
      mode: 'Mode',
      polarDBMysqlInfo: 'PolarDBMysqlInfo',
      polarDBXInfo: 'PolarDBXInfo',
      rdsMysqlInfo: 'RdsMysqlInfo',
      regionId: 'RegionId',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      databricksInfo: CreateApsDatasoureRequestDatabricksInfo,
      datasourceDescription: 'string',
      datasourceName: 'string',
      datasourceType: 'string',
      hiveInfo: CreateApsDatasoureRequestHiveInfo,
      kafkaInfo: CreateApsDatasoureRequestKafkaInfo,
      mode: 'string',
      polarDBMysqlInfo: CreateApsDatasoureRequestPolarDBMysqlInfo,
      polarDBXInfo: CreateApsDatasoureRequestPolarDBXInfo,
      rdsMysqlInfo: CreateApsDatasoureRequestRdsMysqlInfo,
      regionId: 'string',
      slsInfo: CreateApsDatasoureRequestSlsInfo,
    };
  }

  validate() {
    if(this.databricksInfo && typeof (this.databricksInfo as any).validate === 'function') {
      (this.databricksInfo as any).validate();
    }
    if(this.hiveInfo && typeof (this.hiveInfo as any).validate === 'function') {
      (this.hiveInfo as any).validate();
    }
    if(this.kafkaInfo && typeof (this.kafkaInfo as any).validate === 'function') {
      (this.kafkaInfo as any).validate();
    }
    if(this.polarDBMysqlInfo && typeof (this.polarDBMysqlInfo as any).validate === 'function') {
      (this.polarDBMysqlInfo as any).validate();
    }
    if(this.polarDBXInfo && typeof (this.polarDBXInfo as any).validate === 'function') {
      (this.polarDBXInfo as any).validate();
    }
    if(this.rdsMysqlInfo && typeof (this.rdsMysqlInfo as any).validate === 'function') {
      (this.rdsMysqlInfo as any).validate();
    }
    if(this.slsInfo && typeof (this.slsInfo as any).validate === 'function') {
      (this.slsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

