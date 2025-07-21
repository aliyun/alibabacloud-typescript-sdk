// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKmsInstanceBindVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC configuration. The configuration of each VPC contains the following content:
   * 
   * *   VpcId: the ID of the VPC.
   * *   VSwitchId: the vSwitch in the VPC.
   * *   RegionID: the ID of the region to which the VPC belongs.
   * *   VpcOwnerId: the Alibaba Cloud account to which the VPC belongs.
   * 
   * Format: `[{"VpcId":"${VpcId}","VSwitchId":"${VSwitchId}","RegionId":"${RegionId}","VpcOwnerId":${VpcOwnerId}},..]`.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VpcId":"vpc-bp1go9qvmj78j4f4c****","VSwitchId":"vsw-bp16c5pvvcf0fp5b9****","RegionId":"cn-hangzhou","VpcOwnerId":120708975881****},{"VpcId":"vpc-bp14c07ucxg6h1xjm****","VSwitchId":"vsw-bp1wujtnspi1l3gvu****","RegionId":"cn-hangzhou","VpcOwnerId":119285303511****}]
   */
  bindVpcs?: string;
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * kst-phzz64f722a1buamw0****
   */
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: 'string',
      kmsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

