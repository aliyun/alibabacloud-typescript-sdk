// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGroupToAuthorizationRuleRequestValidityPeriod extends $dara.Model {
  /**
   * @remarks
   * 授权规则生效结束时间，采用unix纪元精确到毫秒。
   * 
   * @example
   * 1704062061000
   */
  endTime?: number;
  /**
   * @remarks
   * 授权规则生效开始时间，采用unix纪元精确到毫秒。
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

export class AddGroupToAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * 授权规则标识。
   * 
   * This parameter is required.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 组ID。
   * 
   * This parameter is required.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 有效周期，当validityPeriodType为custom有效。
   */
  validityPeriod?: AddGroupToAuthorizationRuleRequestValidityPeriod;
  /**
   * @remarks
   * 有效期类型，枚举值：permanent（永久），time_bound（自定义时间范围）。
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
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      validityPeriod: 'ValidityPeriod',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      clientToken: 'string',
      groupId: 'string',
      instanceId: 'string',
      validityPeriod: AddGroupToAuthorizationRuleRequestValidityPeriod,
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

