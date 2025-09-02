// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The details about the data source. You are not allowed to change the type of the data source. For example, you are not allowed to change the data source type from MaxCompute to MySQL. Examples of details of some common data sources:
   * 
   * *   odps
   * 
   *         {
   *           "accessId": "*****",
   *           "accessKey": "*****",
   *           "authType": 2,
   *           "endpoint": "http://service.odps.aliyun.com/api",
   *           "project": "xsaxsax",
   *           "tag": "public"
   *         }
   * 
   * *   mysql
   * 
   *         {
   *           "database": "xsaxsa",
   *           "instanceName": "rm-xsaxsa",
   *           "password": "xsaxsa",
   *           "rdsOwnerId": "xasxsa",
   *           "regionId": "cn-shanghai",
   *           "tag": "rds",
   *           "username": "xsaxsa"
   *         }
   * 
   * *   rds
   * 
   *         {
   *           "configType": 1,
   *           "tag": "rds",
   *           "database": "xsaxsa",
   *           "username": "xsaxsa",
   *           "password": "xssaxsa$32050",
   *           "instanceName": "rm-xsaxs",
   *           "rdsOwnerId": "11111111"
   *         }
   * 
   * *   oss
   * 
   *         {
   *           "accessId": "*****",
   *           "accessKey": "*****",
   *           "bucket": "xsa-xs-xs",
   *           "endpoint": "http://oss-cn-shanghai.aliyuncs.com",
   *           "tag": "public"
   *         }
   * 
   * *   sqlserver
   * 
   *         {
   *           "jdbcUrl": "jdbc:sqlserver://xsaxsa-xsaxsa.database.xxx.cn:123;DatabaseName=xsxs-xsxs",
   *           "password": "sdasda$fs",
   *           "tag": "public",
   *           "username": "sxaxacdacdd"
   *         }
   * 
   * *   polardb
   * 
   *         {
   *           "clusterId": "pc-sdadsadsa",
   *           "database": "dsadsadsa",
   *           "ownerId": "121212122",
   *           "password": "sdasdafssa",
   *           "region": "cn-shanghai",
   *           "tag": "polardb",
   *           "username": "asdadsads"
   *         }
   * 
   * *   oracle
   * 
   *         {
   *           "jdbcUrl": "jdbc:oracle:saaa:@xxxxx:1521:PROD",
   *           "password": "sxasaxsa",
   *           "tag": "public",
   *           "username": "sasfadfa"
   *         }
   * 
   * *   mongodb
   * 
   *         {
   *           "address": "[\\"xsaxxsa.mongodb.rds.aliyuncs.com:3717\\"]",
   *           "database": "admin",
   *           "password": "sadsda@",
   *           "tag": "public",
   *           "username": "dsadsadas"
   *         }
   * 
   * *   emr
   * 
   *         {
   *           "accessId": "*****",
   *           "emrClusterId": "C-dsads",
   *           "emrResourceQueueName": "default",
   *           "emrEndpoint": "emr.aliyuncs.com",
   *           "accessKey": "*****",
   *           "emrUserId": "224833315798889783",
   *           "name": "sasdsadsa",
   *           "emrAccessMode": "simple",
   *           "region": "cn-shanghai",
   *           "authType": "2",
   *           "emrProjectId": "FP-sdadsad"
   *         }
   * 
   * *   postgresql
   * 
   *         {
   *           "jdbcUrl": "jdbc:postgresql://xxxx:1921/ssss",
   *           "password": "sdadsads",
   *           "tag": "public",
   *           "username": "sdsasda"
   *         }
   * 
   * *   analyticdb_for_mysql
   * 
   *         {
   *           "instanceId": "am-sadsada",
   *           "database": "xsxsx",
   *           "username": "xsxsa",
   *           "password": "asdadsa",
   *           "connectionString": "am-xssxsxs.ads.aliyuncs.com:3306"
   *         }
   * 
   * *   hybriddb_for_postgresql
   * 
   *         {
   *           "connectionString": "gp-xsaxsaxa-master.gpdbmaster.rds.aliyuncs.com",
   *           "database": "xsaxsaxas",
   *           "password": "xsaxsaxsa@11",
   *           "instanceId": "gp-xsaxsaxsa",
   *           "port": "541132",
   *           "ownerId": "xsaxsaxsas",
   *           "username": "sadsad"
   *         }
   * 
   * *   holo
   * 
   *         {
   *           "accessId": "*****",
   *           "accessKey": "*****",
   *           "database": "xsaxsaxsa",
   *           "instanceId": "xsaxa",
   *           "tag": "aliyun"
   *         }
   * 
   * *   kafka
   * 
   *         {
   *           "instanceId": "xsax-cn-xsaxsa",
   *           "regionId": "cn-shanghai",
   *           "tag": "aliyun",
   *           "ownerId": "1212121212112"
   *         }
   * 
   * @example
   * {"accessId":"xssssss","accessKey":"xsaxsaxsa","authType":2,"endpoint":"http://service.odps.aliyun.com/api","project":"xsaxsax","tag":"public"}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the data source. You can call the [ListDataSources](https://help.aliyun.com/document_detail/2780072.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The environment in which the data source resides. Valid values:
   * 
   * *   0: development environment
   * *   1: production environment
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The status of the data source. This parameter is deprecated. Do not use this parameter.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceId: 'DataSourceId',
      description: 'Description',
      envType: 'EnvType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceId: 'number',
      description: 'string',
      envType: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

