// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the multicloud account.
   * 
   * @example
   * sas_tq_account_xxxx
   */
  accountName?: string;
  /**
   * @remarks
   * The code of the multicloud environment. Valid values:
   * 
   * - qcloud: Tencent Cloud.
   * 
   * - aliyun: Alibaba Cloud.
   * 
   * - hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. This ID is an MD5 hash value that is calculated by Threat Analysis based on specific parameters.
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
   * The remarks of the data source.
   * 
   * @example
   * waf_kafka
   */
  dataSourceRemark?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - obs: Huawei Cloud OBS.
   * 
   * - wafApi: Tencent Cloud WAF download API.
   * 
   * - ckafka: Tencent Cloud CKafka.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The number of logs added to the data source.
   * 
   * @example
   * 1
   */
  logCount?: number;
  /**
   * @remarks
   * The number of log collection tasks created for the data source.
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

export class ListBindDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListBindDataSourcesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListBindDataSourcesResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

