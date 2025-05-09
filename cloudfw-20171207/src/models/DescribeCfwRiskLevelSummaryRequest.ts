// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCfwRiskLevelSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * EcsEIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      lang: 'string',
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

