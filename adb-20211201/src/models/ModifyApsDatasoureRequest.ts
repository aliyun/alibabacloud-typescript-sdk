// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyApsDatasoureRequestKafkaInfo } from "./ModifyApsDatasoureRequestKafkaInfo";
import { ModifyApsDatasoureRequestLakehouseId } from "./ModifyApsDatasoureRequestLakehouseId";
import { ModifyApsDatasoureRequestPolarDBMysqlInfo } from "./ModifyApsDatasoureRequestPolarDbmysqlInfo";
import { ModifyApsDatasoureRequestRdsMysqlInfo } from "./ModifyApsDatasoureRequestRdsMysqlInfo";
import { ModifyApsDatasoureRequestSlsInfo } from "./ModifyApsDatasoureRequestSlsInfo";


export class ModifyApsDatasoureRequest extends $dara.Model {
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
  kafkaInfo?: ModifyApsDatasoureRequestKafkaInfo;
  /**
   * @remarks
   * The lakehouse ID.
   * 
   * @example
   * 123
   */
  lakehouseId?: ModifyApsDatasoureRequestLakehouseId;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  polarDBMysqlInfo?: ModifyApsDatasoureRequestPolarDBMysqlInfo;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  rdsMysqlInfo?: ModifyApsDatasoureRequestRdsMysqlInfo;
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
  slsInfo?: ModifyApsDatasoureRequestSlsInfo;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasourceDescription: 'DatasourceDescription',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      kafkaInfo: 'KafkaInfo',
      lakehouseId: 'LakehouseId',
      polarDBMysqlInfo: 'PolarDBMysqlInfo',
      rdsMysqlInfo: 'RdsMysqlInfo',
      regionId: 'RegionId',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasourceDescription: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      kafkaInfo: ModifyApsDatasoureRequestKafkaInfo,
      lakehouseId: ModifyApsDatasoureRequestLakehouseId,
      polarDBMysqlInfo: ModifyApsDatasoureRequestPolarDBMysqlInfo,
      rdsMysqlInfo: ModifyApsDatasoureRequestRdsMysqlInfo,
      regionId: 'string',
      slsInfo: ModifyApsDatasoureRequestSlsInfo,
    };
  }

  validate() {
    if(this.kafkaInfo && typeof (this.kafkaInfo as any).validate === 'function') {
      (this.kafkaInfo as any).validate();
    }
    if(this.lakehouseId && typeof (this.lakehouseId as any).validate === 'function') {
      (this.lakehouseId as any).validate();
    }
    if(this.polarDBMysqlInfo && typeof (this.polarDBMysqlInfo as any).validate === 'function') {
      (this.polarDBMysqlInfo as any).validate();
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

