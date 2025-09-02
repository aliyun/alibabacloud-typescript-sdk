// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the connection string. Valid values:
   * 
   * *   odps
   * *   mysql
   * *   rds
   * *   oss
   * *   sqlserver
   * *   polardb
   * *   oracle
   * *   mongodb
   * *   emr
   * *   postgresql
   * *   analyticdb_for_mysql
   * *   hybriddb_for_postgresql
   * *   holo
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  connectionType?: string;
  /**
   * @remarks
   * The details of the data source. Examples of details of some common data sources:
   * 
   * *   odps
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "xssssss",
   *       "accessKey": "xsaxsaxsa",
   *       "authType": 2,
   *       "endpoint": "http://service.odps.aliyun.com/api",
   *       "project": "xsaxsax",
   *       "tag": "public"
   *     }
   * 
   * *   mysql
   * 
   * <!---->
   * 
   *     {
   *       "database": "xsaxsa",
   *       "instanceName": "rm-xsaxsa",
   *       "password": "xsaxsa",
   *       "rdsOwnerId": "xasxsa",
   *       "regionId": "cn-shanghai",
   *       "tag": "rds",
   *       "username": "xsaxsa"
   *     }
   * 
   * *   rds
   * 
   * <!---->
   * 
   *     {
   *       "configType": 1,
   *       "tag": "rds",
   *       "database": "xsaxsa",
   *       "username": "xsaxsa",
   *       "password": "xssaxsa$32050",
   *       "instanceName": "rm-xsaxs",
   *       "rdsOwnerId": "11111111"
   *     }
   * 
   * *   oss
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "sssssxx",
   *       "accessKey": "xsaxaxsaxs",
   *       "bucket": "xsa-xs-xs",
   *       "endpoint": "http://oss-cn-shanghai.aliyuncs.com",
   *       "tag": "public"
   *     }
   * 
   * *   sqlserver
   * 
   * <!---->
   * 
   *     {
   *       "jdbcUrl": "jdbc:sqlserver://xsaxsa-xsaxsa.database.xxx.cn:123;DatabaseName=xsxs-xsxs",
   *       "password": "sdasda$fs",
   *       "tag": "public",
   *       "username": "sxaxacdacdd"
   *     }
   * 
   * *   polardb
   * 
   * <!---->
   * 
   *     {
   *       "clusterId": "pc-sdadsadsa",
   *       "database": "dsadsadsa",
   *       "ownerId": "121212122",
   *       "password": "sdasdafssa",
   *       "region": "cn-shanghai",
   *       "tag": "polardb",
   *       "username": "asdadsads"
   *     }
   * 
   * *   oracle
   * 
   * <!---->
   * 
   *     {
   *       "jdbcUrl": "jdbc:oracle:saaa:@xxxxx:1521:PROD",
   *       "password": "sxasaxsa",
   *       "tag": "public",
   *       "username": "sasfadfa"
   *     }
   * 
   * *   mongodb
   * 
   * <!---->
   * 
   *     {
   *       "address": "[\\"xsaxxsa.mongodb.rds.aliyuncs.com:3717\\"]",
   *       "database": "admin",
   *       "password": "sadsda@",
   *       "tag": "public",
   *       "username": "dsadsadas"
   *     }
   * 
   * *   emr
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "xsaxsa",
   *       "emrClusterId": "C-dsads",
   *       "emrResourceQueueName": "default",
   *       "emrEndpoint": "emr.aliyuncs.com",
   *       "accessKey": "dsadsad",
   *       "emrUserId": "224833315798889783",
   *       "name": "sasdsadsa",
   *       "emrAccessMode": "simple",
   *       "region": "cn-shanghai",
   *       "authType": "2",
   *       "emrProjectId": "FP-sdadsad"
   *     }
   * 
   * *   postgresql
   * 
   * <!---->
   * 
   *     {
   *       "jdbcUrl": "jdbc:postgresql://xxxx:1921/ssss",
   *       "password": "sdadsads",
   *       "tag": "public",
   *       "username": "sdsasda"
   *     }
   * 
   * *   analyticdb_for_mysql
   * 
   * <!---->
   * 
   *     {
   *       "instanceId": "am-sadsada",
   *       "database": "xsxsx",
   *       "username": "xsxsa",
   *       "password": "asdadsa",
   *       "connectionString": "am-xssxsxs.ads.aliyuncs.com:3306"
   *     }
   * 
   * *   hybriddb_for_postgresql
   * 
   * <!---->
   * 
   *     {
   *       "connectionString": "gp-xsaxsaxa-master.gpdbmaster.rds.aliyuncs.com",
   *       "database": "xsaxsaxas",
   *       "password": "xsaxsaxsa@11",
   *       "instanceId": "gp-xsaxsaxsa",
   *       "port": "541132",
   *       "ownerId": "xsaxsaxsas",
   *       "username": "sadsad"
   *     }
   * 
   * *   holo
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "xsaxsaxs",
   *       "accessKey": "xsaxsaxsa",
   *       "database": "xsaxsaxsa",
   *       "instanceId": "xsaxa",
   *       "tag": "aliyun"
   *     }
   * 
   * *   kafka
   * 
   * <!---->
   * 
   *     {
   *       "instanceId": "xsax-cn-xsaxsa",
   *       "regionId": "cn-shanghai",
   *       "tag": "aliyun",
   *       "ownerId": "1212121212112"
   *     }
   * 
   * This parameter is required.
   * 
   * @example
   * {"database":"dbname","instanceName":"instancename","password":"password","rdsOwnerId":"123","username":"username"}
   */
  content?: string;
  /**
   * @remarks
   * The description of the connection string.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The environment in which the data source is used. Valid values: 0 and 1. The value 0 indicates the development environment. The value 1 indicates the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace with which the data source is associated. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  projectId?: number;
  /**
   * @remarks
   * The subtype of the connection string. This parameter is used for scenarios where a type includes subtypes. The following type and subtypes are supported:
   * 
   * *   Type: `rds`
   * *   Subtypes: `mysql`, `sqlserver`, and `postgresql`.
   * 
   * @example
   * mysql
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      content: 'Content',
      description: 'Description',
      envType: 'EnvType',
      name: 'Name',
      projectId: 'ProjectId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      content: 'string',
      description: 'string',
      envType: 'number',
      name: 'string',
      projectId: 'number',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

