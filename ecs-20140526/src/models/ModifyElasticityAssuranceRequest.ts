// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyElasticityAssuranceRequestPrivatePoolOptions } from "./ModifyElasticityAssuranceRequestPrivatePoolOptions";
import { ModifyElasticityAssuranceRequestRecurrenceRules } from "./ModifyElasticityAssuranceRequestRecurrenceRules";


export class ModifyElasticityAssuranceRequest extends $dara.Model {
  privatePoolOptions?: ModifyElasticityAssuranceRequestPrivatePoolOptions;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the elasticity assurance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The total number of instances for which you want to reserve capacity. Valid values: the number of created instances to 1000. This parameter is mutually exclusive with other parameters in the same request.
   * 
   * @example
   * 10
   */
  instanceAmount?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The assurance schedules based on which the capacity reservation takes effect.
   * 
   * >  Time-segmented elasticity assurances are available only in specific regions and to specific users. To use time-segmented elasticity assurances, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   */
  recurrenceRules?: ModifyElasticityAssuranceRequestRecurrenceRules[];
  /**
   * @remarks
   * The region ID of the elasticity assurance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceAmount: 'InstanceAmount',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recurrenceRules: 'RecurrenceRules',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: ModifyElasticityAssuranceRequestPrivatePoolOptions,
      clientToken: 'string',
      description: 'string',
      instanceAmount: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      recurrenceRules: { 'type': 'array', 'itemType': ModifyElasticityAssuranceRequestRecurrenceRules },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(Array.isArray(this.recurrenceRules)) {
      $dara.Model.validateArray(this.recurrenceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

