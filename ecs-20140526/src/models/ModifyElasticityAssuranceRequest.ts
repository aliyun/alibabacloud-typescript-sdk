// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticityAssuranceRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the elasticity assurance.
   * 
   * This parameter is required.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The name of the elasticity assurance. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with http:// or https://. The name can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * eapTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticityAssuranceRequestRecurrenceRules extends $dara.Model {
  /**
   * @remarks
   * The end time of the time-sharing assurance. The value must be on the hour.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The policy type of the recurrence rule. Valid values:
   * - Daily: repeats on a daily basis.
   * - Weekly: repeats on a weekly basis.
   * - Monthly: repeats on a monthly basis.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The value of the recurrence rule.
   * 
   * - If `RecurrenceType` is set to `Daily`, you can specify only one value. Valid values: 1 to 31. The value specifies the interval in days between recurrences.
   * - If `RecurrenceType` is set to `Weekly`, you can specify multiple values separated by commas (,). The values for Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6. For example, `1,2` specifies Monday and Tuesday.
   * - If `RecurrenceType` is set to `Monthly`, the format is `A-B`. Valid values of A and B: 1 to 31. B must be greater than or equal to A. For example, `1-5` specifies the 1st to 5th day of each month.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * 5
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The effective period start time of the time-sharing assurance. The value must be on the hour.
   * 
   * > You must specify both `StartHour` and `EndHour`, and the difference between them must be at least 4 hours.
   * 
   * @example
   * 4
   */
  startHour?: number;
  static names(): { [key: string]: string } {
    return {
      endHour: 'EndHour',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      startHour: 'StartHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endHour: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      startHour: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticityAssuranceRequest extends $dara.Model {
  privatePoolOptions?: ModifyElasticityAssuranceRequestPrivatePoolOptions;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * The total number of instances to be reserved by the elasticity assurance. Valid values: number of used instances to 1000. This parameter cannot be modified together with other parameters.
   * 
   * @example
   * 10
   */
  instanceAmount?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of recurrence rules for the time-sharing elasticity assurance.
   */
  recurrenceRules?: ModifyElasticityAssuranceRequestRecurrenceRules[];
  /**
   * @remarks
   * The region ID of the elasticity assurance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

