// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth weight. Different specifications support different values. You can call the DescribeInstanceTypes operation to query the values supported by the current instance type.
   * 
   * Valid values:
   * 
   * *   Vpc-L1.
   * *   Vpc-L2.
   * *   Ebs-L1.
   * *   Ebs-L2.
   * *   Default.
   * 
   * @example
   * Vpc-L1
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to modify network configurations.
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

