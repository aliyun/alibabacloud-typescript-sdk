// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorizationRuleUserAttachmentRequestValidityPeriod extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1704062061000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the validity period. This is a UNIX timestamp. Unit: milliseconds.
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

export class UpdateAuthorizationRuleUserAttachmentRequest extends $dara.Model {
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
   * A client token used to ensure the idempotence of the request. Generate a unique value from your client for this parameter. ClientToken supports only ASCII characters and must be no more than 64 characters long. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The time range of the validity period. This parameter takes effect when ValidityType is set to time_bound.
   */
  validityPeriod?: UpdateAuthorizationRuleUserAttachmentRequestValidityPeriod;
  /**
   * @remarks
   * The validity period type of the association. Valid values:
   * 
   * - permanent: The association is permanent.
   * 
   * - time_bound: The association is valid for a custom time range.
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
      validityPeriod: UpdateAuthorizationRuleUserAttachmentRequestValidityPeriod,
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

