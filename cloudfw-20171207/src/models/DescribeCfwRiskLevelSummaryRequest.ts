// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCfwRiskLevelSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type. Valid value:
   * 
   * - **ecs**
   * 
   * @example
   * EcsEIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the region where Cloud Firewall is deployed.
   * 
   * > For more information about the regions where Cloud Firewall is available, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
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

