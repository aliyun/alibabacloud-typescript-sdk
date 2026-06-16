// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorizationRuleApplicationAttachmentRequestValidityPeriod extends $dara.Model {
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

export class UpdateAuthorizationRuleApplicationAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
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
   * A client token to ensure the idempotence of the request. Generate a unique value from your client for this parameter. The ClientToken can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The time range of the validity period. This parameter takes effect only when **ValidityType** is set to **time_bound**.
   */
  validityPeriod?: UpdateAuthorizationRuleApplicationAttachmentRequestValidityPeriod;
  /**
   * @remarks
   * The validity type of the relationship. Valid values:
   * 
   * - permanent: The relationship is permanent.
   * 
   * - time_bound: The relationship is valid for a custom time range.
   * 
   * This parameter is required.
   * 
   * @example
   * permanent
   */
  validityType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      validityPeriod: 'ValidityPeriod',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      authorizationRuleId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      validityPeriod: UpdateAuthorizationRuleApplicationAttachmentRequestValidityPeriod,
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

