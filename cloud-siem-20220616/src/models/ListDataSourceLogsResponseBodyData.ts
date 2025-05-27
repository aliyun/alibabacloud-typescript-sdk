// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs } from "./ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs";


export class ListDataSourceLogsResponseBodyData extends $dara.Model {
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
   * The code that is used for multi-cloud environments. Valid values:
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
   * The ID of the data source. The value is obtained after the threat analysis feature calculates the MD5 hash value of a parameter.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The logs of the data source.
   */
  dataSourceInstanceLogs?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs[];
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * waf kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The remarks of the data source.
   * 
   * @example
   * waf kafka
   */
  dataSourceInstanceRemark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceLogs: 'DataSourceInstanceLogs',
      dataSourceInstanceName: 'DataSourceInstanceName',
      dataSourceInstanceRemark: 'DataSourceInstanceRemark',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceLogs: { 'type': 'array', 'itemType': ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs },
      dataSourceInstanceName: 'string',
      dataSourceInstanceRemark: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceInstanceLogs)) {
      $dara.Model.validateArray(this.dataSourceInstanceLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

