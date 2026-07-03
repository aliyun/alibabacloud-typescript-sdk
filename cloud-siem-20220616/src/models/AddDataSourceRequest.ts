// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123xxxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code for the multicloud service.
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
   * XX-Beijing-Kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The parameters for the data source. The value must be a JSON array.
   * 
   * @example
   * [{"paraCode":"region_code","paraValue":"ap-guangzhou"}]
   */
  dataSourceInstanceParams?: string;
  /**
   * @remarks
   * The remarks on the data source.
   * 
   * @example
   * XX Cloud Firewall Shanghai instance
   */
  dataSourceInstanceRemark?: string;
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
   * The region of the data management center for threat analysis. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: For assets in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: For assets in regions outside China.
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

