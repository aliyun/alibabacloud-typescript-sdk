// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the cloud account.
   * 
   * @example
   * sas_tq_account_xxxx
   */
  accountName?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * waf_kafka
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The remarks on the data source.
   * 
   * @example
   * waf_kafka
   */
  dataSourceRemark?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   obs: Huawei Cloud Object Storage Service (OBS)
   * *   wafApi: download API of Tencent Cloud Web Application Firewall (WAF)
   * *   ckafka: Tencent Cloud Kafka (CKafka)
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The number of logs that are added within the data source.
   * 
   * @example
   * 1
   */
  logCount?: number;
  /**
   * @remarks
   * The number of existing tasks that are created to add logs within the data source.
   * 
   * @example
   * 0
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceName: 'DataSourceName',
      dataSourceRemark: 'DataSourceRemark',
      dataSourceType: 'DataSourceType',
      logCount: 'LogCount',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceName: 'string',
      dataSourceRemark: 'string',
      dataSourceType: 'string',
      logCount: 'number',
      taskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

