// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossCloudRegionMappingToAliyunRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  aliyunRegionId?: string;
  /**
   * @example
   * HuaweiCloud
   */
  cloudProvider?: string;
  /**
   * @example
   * cn-east-3
   */
  crossCloudRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunRegionId: 'AliyunRegionId',
      cloudProvider: 'CloudProvider',
      crossCloudRegionId: 'CrossCloudRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegionId: 'string',
      cloudProvider: 'string',
      crossCloudRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

