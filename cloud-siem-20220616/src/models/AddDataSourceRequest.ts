// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the multi-cloud provider.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * XX Beijing Kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The parameters of the data source. The value is a JSON array.
   * 
   * @example
   * [{"paraCode":"region_code","paraValue":"ap-guangzhou"}]
   */
  dataSourceInstanceParams?: string;
  /**
   * @remarks
   * The remark of the data source.
   * 
   * @example
   * XX Cloud Firewall Shanghai instance
   */
  dataSourceInstanceRemark?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * - obs: Huawei Cloud OBS.
   * - wafApi: Tencent Cloud WAF download API. 
   * - ckafka: Tencent Cloud CKafka.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
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

