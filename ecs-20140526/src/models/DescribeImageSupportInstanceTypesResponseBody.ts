// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageSupportInstanceTypesResponseBodyInstanceTypes } from "./DescribeImageSupportInstanceTypesResponseBodyInstanceTypes";


export class DescribeImageSupportInstanceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The key of filter N. Only the image ID can be used to filter instance types. Valid values:
   * 
   * *   imagId: image ID
   * *   filter: image ID
   * 
   * @example
   * m-o6w3gy99qf89rkga****
   */
  imageId?: string;
  /**
   * @remarks
   * {
   *     "RequestId": "CF661E2D-4AFE-4BCD-959A-A65E14416B44",
   *     "RegionId": "cn-hangzhou",
   *     "ImageId": "ubuntu_16_0402_64_20G_alibase_20180409.vhd",
   *     "InstanceTypes": {
   *         "InstanceType": [{
   *             "InstanceTypeId": "ecs.t1.xsmall",
   *             "CpuCoreCount": 1,
   *             "MemorySize": 0.5,
   *             "InstanceTypeFamily": "ecs.t1"
   *         },
   *         {
   *             "InstanceTypeId": "ecs.t1.small",
   *             "CpuCoreCount": 1,
   *             "MemorySize": 1,
   *             "InstanceTypeFamily": "ecs.t1"
   *         }]
   *     }
   * }
   */
  instanceTypes?: DescribeImageSupportInstanceTypesResponseBodyInstanceTypes;
  /**
   * @remarks
   * {
   *     "RequestId": "CF661E2D-4AFE-4BCD-959A-A65E14416B44",
   *     "RegionId": "cn-hangzhou",
   *     "ImageId": "ubuntu_16_0402_64_20G_alibase_20180409.vhd",
   *     "InstanceTypes": {
   *         "InstanceType": [{
   *             "InstanceTypeId": "ecs.t1.xsmall",
   *             "CpuCoreCount": 1,
   *             "MemorySize": 0.5,
   *             "InstanceTypeFamily": "ecs.t1"
   *         },
   *         {
   *             "InstanceTypeId": "ecs.t1.small",
   *             "CpuCoreCount": 1,
   *             "MemorySize": 1,
   *             "InstanceTypeFamily": "ecs.t1"
   *         }]
   *     }
   * }
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceTypes: 'InstanceTypes',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceTypes: DescribeImageSupportInstanceTypesResponseBodyInstanceTypes,
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

