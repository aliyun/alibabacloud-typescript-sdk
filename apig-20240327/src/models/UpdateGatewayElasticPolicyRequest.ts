// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayElasticPolicyRequestElasticPolicyEnableScaleTimePolicyList extends $dara.Model {
  /**
   * @example
   * 18:00
   */
  endTime?: string;
  /**
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
   * @example
   * 06:00
   */
  endTime?: string;
  /**
   * @example
   * 00:00
   */
  startTime?: string;
  /**
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
   * @example
   * true
   */
  elasticEnabled?: boolean;
  /**
   * @example
   * CronHPA
   */
  elasticType?: string;
  enableScaleTimePolicyList?: UpdateGatewayElasticPolicyRequestElasticPolicyEnableScaleTimePolicyList[];
  /**
   * @example
   * true
   */
  loadWarningThreshold?: boolean;
  /**
   * @example
   * 10
   */
  maxUnits?: number;
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

