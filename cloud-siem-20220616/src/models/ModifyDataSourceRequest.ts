// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123xxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * - qcloud: Tencent Cloud.
   * 
   * - aliyun: Alibaba Cloud.
   * 
   * - hcloud: Huawei Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash that is calculated based on the values of other parameters. You can call the [DescribeDataSourceInstance](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CDescribeDataSourceInstance) operation to obtain the data source ID.
   * 
   * This parameter is required.
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
   * beijing_waf_kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The parameters of the data source, in a JSON array format.
   * 
   * @example
   * [{"paraCode":"region_code","paraValue":"ap-guangzhou"}]
   */
  dataSourceInstanceParams?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * waf_alert_log
   */
  dataSourceInstanceRemark?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - ckafka: Tencent Cloud CKafka.
   * 
   * - obs: Huawei Cloud Object Storage Service (OBS).
   * 
   * - wafApi: the API used to download attack logs from Tencent Cloud Web Application Firewall (WAF).
   * 
   * This parameter is required.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The region where the Data Management center of the threat analysis feature is located. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceName: 'DataSourceInstanceName',
      dataSourceInstanceParams: 'DataSourceInstanceParams',
      dataSourceInstanceRemark: 'DataSourceInstanceRemark',
      dataSourceType: 'DataSourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceName: 'string',
      dataSourceInstanceParams: 'string',
      dataSourceInstanceRemark: 'string',
      dataSourceType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

