// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewLindormInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The subscription duration of the instance. The valid values of this parameter depend on the value of the PricingCycle parameter.
   * 
   * *   If PricingCycle is set to **Month**, set this parameter to an integer that ranges from **1** to **9**.
   * *   If PricingCycle is set to **Year**, set this parameter to an integer that ranges from **1** to **3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the instance that you want to renew. You can call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The period based on which you are charged for the instance. Valid values:
   * 
   * *   **Month**: You are charged for the instance based on months.
   * *   **Year**: You are charged for the instance based on years.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region in which the instance that you want to renew is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

