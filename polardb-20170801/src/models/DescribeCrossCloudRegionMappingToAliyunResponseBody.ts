// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossCloudRegionMappingToAliyunResponseBodyCrossCloudRegionMappingList extends $dara.Model {
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

export class DescribeCrossCloudRegionMappingToAliyunResponseBody extends $dara.Model {
  crossCloudRegionMappingList?: DescribeCrossCloudRegionMappingToAliyunResponseBodyCrossCloudRegionMappingList[];
  /**
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      crossCloudRegionMappingList: 'CrossCloudRegionMappingList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossCloudRegionMappingList: { 'type': 'array', 'itemType': DescribeCrossCloudRegionMappingToAliyunResponseBodyCrossCloudRegionMappingList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.crossCloudRegionMappingList)) {
      $dara.Model.validateArray(this.crossCloudRegionMappingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

