// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTypesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The code of the third-party cloud service.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
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
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      dataSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

