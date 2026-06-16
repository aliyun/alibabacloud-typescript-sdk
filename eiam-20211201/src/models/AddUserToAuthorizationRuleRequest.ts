// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToAuthorizationRuleRequestValidityPeriod extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1704062061000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the validity period. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1704042061000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * A client token that you provide to ensure the idempotence of the request. Make sure that the client token is unique for each request. The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The time range of the validity period. This parameter is valid only when **ValidityType** is set to **time_bound**.
   */
  validityPeriod?: AddUserToAuthorizationRuleRequestValidityPeriod;
  /**
   * @remarks
   * The type of the validity period for the relationship. Valid values:
   * 
   * - permanent: The authorization is permanent.
   * 
   * - time_bound: The authorization is valid for a custom time range.
   * 
   * This parameter is required.
   * 
   * @example
   * permanent
   */
  validityType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      userId: 'UserId',
      validityPeriod: 'ValidityPeriod',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      userId: 'string',
      validityPeriod: AddUserToAuthorizationRuleRequestValidityPeriod,
      validityType: 'string',
    };
  }

  validate() {
    if(this.validityPeriod && typeof (this.validityPeriod as any).validate === 'function') {
      (this.validityPeriod as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

