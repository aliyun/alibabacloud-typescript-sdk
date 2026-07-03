// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The code for the multicloud environment.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ckafka**: Tencent Cloud CKafka.
   * 
   * - **obs**: Huawei Cloud OBS.
   * 
   * - **wafApi**: Tencent Cloud WAF attack log download API.
   * 
   * This parameter is required.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is deployed. Select a region based on the region where your assets are located. Valid values:
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
      cloudCode: 'CloudCode',
      dataSourceType: 'DataSourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
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

