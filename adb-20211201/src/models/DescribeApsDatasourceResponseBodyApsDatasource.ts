// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo } from "./DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo";
import { DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo } from "./DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo";
import { DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo } from "./DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo";
import { DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo } from "./DescribeApsDatasourceResponseBodyApsDatasourcePolarDbmysqlInfo";
import { DescribeApsDatasourceResponseBodyApsDatasourceRdsMysqlInfo } from "./DescribeApsDatasourceResponseBodyApsDatasourceRdsMysqlInfo";
import { DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo } from "./DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo";


export class DescribeApsDatasourceResponseBodyApsDatasource extends $dara.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 2024-04-12T15:03:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about Databricks.
   * 
   * @example
   * -
   */
  databricksInfo?: DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo;
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
   * The name of the data source.
   * 
   * @example
   * kafka-2024***
   */
  datasourceName?: string;
  /**
   * @remarks
   * The type of the data source.
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
  hiveInfo?: DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo;
  /**
   * @remarks
   * The information about the Kafka instance.
   * 
   * @example
   * -
   */
  kafkaInfo?: DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  polarDBMysqlInfo?: DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  rdsMysqlInfo?: DescribeApsDatasourceResponseBodyApsDatasourceRdsMysqlInfo;
  /**
   * @remarks
   * The Simple Log Service (SLS) project.
   * 
   * @example
   * -
   */
  slsInfo?: DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      databricksInfo: 'DatabricksInfo',
      datasourceDescription: 'DatasourceDescription',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      hiveInfo: 'HiveInfo',
      kafkaInfo: 'KafkaInfo',
      polarDBMysqlInfo: 'PolarDBMysqlInfo',
      rdsMysqlInfo: 'RdsMysqlInfo',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusterId: 'string',
      databricksInfo: DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo,
      datasourceDescription: 'string',
      datasourceName: 'string',
      datasourceType: 'string',
      hiveInfo: DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo,
      kafkaInfo: DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo,
      polarDBMysqlInfo: DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo,
      rdsMysqlInfo: DescribeApsDatasourceResponseBodyApsDatasourceRdsMysqlInfo,
      slsInfo: DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo,
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

