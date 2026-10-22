// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime extends $dara.Model {
  /**
   * @remarks
   * The days of the week when logon is allowed.
   */
  days?: number[];
  /**
   * @remarks
   * The hours of the day when logon is allowed.
   */
  hours?: number[];
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      hours: 'Hours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'number' },
      hours: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.days)) {
      $dara.Model.validateArray(this.days);
    }
    if(Array.isArray(this.hours)) {
      $dara.Model.validateArray(this.hours);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfig extends $dara.Model {
  /**
   * @remarks
   * The details of the allowed logon periods.
   */
  effectiveTime?: SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime[];
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: { 'type': 'array', 'itemType': SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime },
    };
  }

  validate() {
    if(Array.isArray(this.effectiveTime)) {
      $dara.Model.validateArray(this.effectiveTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The logon time limit configuration.
   * 
   * This parameter is required.
   */
  accessTimeRangeConfig?: SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfig;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy.
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 13
   */
  policyId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTimeRangeConfig: 'AccessTimeRangeConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTimeRangeConfig: SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfig,
      instanceId: 'string',
      policyId: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(this.accessTimeRangeConfig && typeof (this.accessTimeRangeConfig as any).validate === 'function') {
      (this.accessTimeRangeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

