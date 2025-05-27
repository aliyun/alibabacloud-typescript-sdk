// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams } from "./DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams";


export class DescribeDataSourceInstanceResponseBodyData extends $dara.Model {
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
   * The parameters of the data source.
   */
  dataSourceInstanceParams?: DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceParams: 'DataSourceInstanceParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceParams: { 'type': 'array', 'itemType': DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams },
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceInstanceParams)) {
      $dara.Model.validateArray(this.dataSourceInstanceParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

