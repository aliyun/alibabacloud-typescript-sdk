// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code for the multicloud environment. Valid values:
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
   * The ID of the data source. Threat Analysis calculates this ID as an MD5 hash value based on specific parameters. To obtain the data source ID, call the [ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListDataSourceLogs) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The details of the data source parameters. The value must be a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"LogCode":"cloud_siem_qcloud_waf_alert_log","LogParas":"[{\\"ParaCode\\":\\"api_name\\",\\"ParaValue\\":\\"GetAttackDownloadRecords\\"}]"}]
   */
  dataSourceInstanceLogs?: string;
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The region where the Data Management Center of Threat Analysis is deployed. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Assets are in the Chinese mainland and Hong Kong (China).
   * 
   * - ap-southeast-1: Assets are outside China.
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
      dataSourceInstanceLogs: 'DataSourceInstanceLogs',
      logCode: 'LogCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceLogs: 'string',
      logCode: 'string',
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

