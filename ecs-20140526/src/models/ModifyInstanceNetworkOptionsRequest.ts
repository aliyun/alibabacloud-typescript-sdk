// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth weight.
   * 
   * The supported values vary with instance types. You can query the bandwidth weights supported by the current instance type by using the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html).
   * 
   * Valid values:
   * 
   * *   Vpc-L1: Vpc-L1.
   * *   Vpc-L2: Vpc-L2.
   * *   Ebs-L1: Ebs-L1.
   * *   Ebs-L2: Ebs-L2.
   * *   Default: the Default.
   * 
   * @example
   * Vpc-L1
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * The ID of the instance whose network bandwidth weight is to be modified.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthWeighting: 'BandwidthWeighting',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthWeighting: 'string',
      instanceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

