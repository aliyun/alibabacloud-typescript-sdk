// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayElasticPolicyResponseBodyDataElasticPolicyDisableScaleTimePolicyList extends $dara.Model {
  /**
   * @example
   * 00:00
   */
  endTime?: string;
  /**
   * @example
   * 00:00
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

export class GetGatewayElasticPolicyResponseBodyDataElasticPolicyEnableScaleTimePolicyList extends $dara.Model {
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

export class GetGatewayElasticPolicyResponseBodyDataElasticPolicyTimePolicyList extends $dara.Model {
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

export class GetGatewayElasticPolicyResponseBodyDataElasticPolicy extends $dara.Model {
  disableScaleTimePolicyList?: GetGatewayElasticPolicyResponseBodyDataElasticPolicyDisableScaleTimePolicyList[];
  /**
   * @example
   * true
   */
  elasticEnabled?: boolean;
  /**
   * @example
   * AutoHPA
   */
  elasticType?: string;
  enableScaleTimePolicyList?: GetGatewayElasticPolicyResponseBodyDataElasticPolicyEnableScaleTimePolicyList[];
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
  timePolicyList?: GetGatewayElasticPolicyResponseBodyDataElasticPolicyTimePolicyList[];
  static names(): { [key: string]: string } {
    return {
      disableScaleTimePolicyList: 'disableScaleTimePolicyList',
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
      disableScaleTimePolicyList: { 'type': 'array', 'itemType': GetGatewayElasticPolicyResponseBodyDataElasticPolicyDisableScaleTimePolicyList },
      elasticEnabled: 'boolean',
      elasticType: 'string',
      enableScaleTimePolicyList: { 'type': 'array', 'itemType': GetGatewayElasticPolicyResponseBodyDataElasticPolicyEnableScaleTimePolicyList },
      loadWarningThreshold: 'boolean',
      maxUnits: 'number',
      timePolicyList: { 'type': 'array', 'itemType': GetGatewayElasticPolicyResponseBodyDataElasticPolicyTimePolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.disableScaleTimePolicyList)) {
      $dara.Model.validateArray(this.disableScaleTimePolicyList);
    }
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

export class GetGatewayElasticPolicyResponseBodyData extends $dara.Model {
  elasticPolicy?: GetGatewayElasticPolicyResponseBodyDataElasticPolicy;
  /**
   * @example
   * 123456
   */
  elasticStrategyId?: string;
  /**
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticPolicy: 'elasticPolicy',
      elasticStrategyId: 'elasticStrategyId',
      elasticType: 'elasticType',
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPolicy: GetGatewayElasticPolicyResponseBodyDataElasticPolicy,
      elasticStrategyId: 'string',
      elasticType: 'string',
      gatewayId: 'string',
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

export class GetGatewayElasticPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetGatewayElasticPolicyResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B7F02714-182D-55BC-AF0B-F454364445E4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGatewayElasticPolicyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

