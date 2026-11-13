// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayElasticPolicyRequestElasticPolicyEnableScaleTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The O&M end time (HH:mm).
   * 
   * @example
   * 18:00
   */
  endTime?: string;
  /**
   * @remarks
   * The O&M start time (HH:mm).
   * 
   * @example
   * 09:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayElasticPolicyRequestElasticPolicyTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The O&M end time (HH:mm).
   * 
   * @example
   * 06:00
   */
  endTime?: string;
  /**
   * @remarks
   * The O&M start time (HH:mm).
   * 
   * @example
   * 00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 4
   */
  units?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      units: 'units',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      units: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayElasticPolicyRequestElasticPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable elastic scaling. A value of false indicates that elastic scaling is disabled. When disabled, other fields are not validated and the disabling process is executed directly.
   * 
   * @example
   * true
   */
  elasticEnabled?: boolean;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The time periods during which AutoHPA is allowed to scale out (startTime/endTime).
   */
  enableScaleTimePolicyList?: UpdateGatewayElasticPolicyRequestElasticPolicyEnableScaleTimePolicyList[];
  /**
   * @remarks
   * Specifies whether to enable the load alert threshold for AutoHPA.
   * 
   * @example
   * true
   */
  loadWarningThreshold?: boolean;
  /**
   * @remarks
   * The maximum number of replicas. This parameter is required for AutoHPA.
   * 
   * @example
   * 10
   */
  maxUnits?: number;
  /**
   * @remarks
   * The list of scheduled policies.
   */
  timePolicyList?: UpdateGatewayElasticPolicyRequestElasticPolicyTimePolicyList[];
  static names(): { [key: string]: string } {
    return {
      elasticEnabled: 'elasticEnabled',
      elasticType: 'elasticType',
      enableScaleTimePolicyList: 'enableScaleTimePolicyList',
      loadWarningThreshold: 'loadWarningThreshold',
      maxUnits: 'maxUnits',
      timePolicyList: 'timePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticEnabled: 'boolean',
      elasticType: 'string',
      enableScaleTimePolicyList: { 'type': 'array', 'itemType': UpdateGatewayElasticPolicyRequestElasticPolicyEnableScaleTimePolicyList },
      loadWarningThreshold: 'boolean',
      maxUnits: 'number',
      timePolicyList: { 'type': 'array', 'itemType': UpdateGatewayElasticPolicyRequestElasticPolicyTimePolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.enableScaleTimePolicyList)) {
      $dara.Model.validateArray(this.enableScaleTimePolicyList);
    }
    if(Array.isArray(this.timePolicyList)) {
      $dara.Model.validateArray(this.timePolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayElasticPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The elastic policy object.
   */
  elasticPolicy?: UpdateGatewayElasticPolicyRequestElasticPolicy;
  static names(): { [key: string]: string } {
    return {
      elasticPolicy: 'elasticPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPolicy: UpdateGatewayElasticPolicyRequestElasticPolicy,
    };
  }

  validate() {
    if(this.elasticPolicy && typeof (this.elasticPolicy as any).validate === 'function') {
      (this.elasticPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

