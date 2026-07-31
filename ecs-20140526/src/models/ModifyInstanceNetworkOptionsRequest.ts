// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth weight.
   * 
   * The supported values vary by instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the bandwidth weight values supported by the current instance type.
   * 
   * @example
   * Vpc-L1
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * The instance ID of the instance for which you want to modify the network bandwidth weight.
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

