// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossCloudRegionRequest extends $dara.Model {
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
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  static names(): { [key: string]: string } {
    return {
      cloudProvider: 'CloudProvider',
      crossCloudRegionId: 'CrossCloudRegionId',
      DBType: 'DBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProvider: 'string',
      crossCloudRegionId: 'string',
      DBType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

