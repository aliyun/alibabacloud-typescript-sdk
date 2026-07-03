// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceLogRequest extends $dara.Model {
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
   * The ID of the data source. The threat analysis feature generates this ID by calculating an MD5 hash of the parameters.
   * Call the [DescribeDataSourceInstance](https://help.aliyun.com/document_detail/2639736.html) operation to obtain the data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The details of the data source parameters, in a JSON array format.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"LogCode":"cloud_siem_qcloud_waf_alert_log","LogParas":"[{\\"ParaCode\\":\\"api_name\\",\\"ParaValue\\":\\"GetAttackDownloadRecords\\"}]"}]
   */
  dataSourceInstanceLogs?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - obs: Huawei Cloud Object Storage Service (OBS).
   * 
   * - wafApi: Tencent Cloud Web Application Firewall (WAF) download API.
   * 
   * - ckafka: Tencent Cloud CKafka.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
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
   * The ID of the log. The threat analysis feature generates this ID by calculating an MD5 hash of the parameters. Call the [ListDataSourceLogs](https://help.aliyun.com/document_detail/2639707.html) operation to obtain the log ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  logInstanceId?: string;
  /**
   * @remarks
   * The region where the Data Management hub is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are outside China.
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
      dataSourceType: 'DataSourceType',
      logCode: 'LogCode',
      logInstanceId: 'LogInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceLogs: 'string',
      dataSourceType: 'string',
      logCode: 'string',
      logInstanceId: 'string',
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

