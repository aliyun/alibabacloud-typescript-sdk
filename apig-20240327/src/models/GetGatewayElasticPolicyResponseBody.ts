// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayElasticPolicyResponseBodyDataElasticPolicyDisableScaleTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The O&M end time in the HH:mm format.
   * 
   * @example
   * 00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The O&M start time in the HH:mm format.
   * 
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
   * @remarks
   * The O&M end time in the HH:mm format.
   * 
   * @example
   * 18:00
   */
  endTime?: string;
  /**
   * @remarks
   * The O&M start time in the HH:mm format.
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

export class GetGatewayElasticPolicyResponseBodyDataElasticPolicyTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The O&M end time in the HH:mm format.
   * 
   * @example
   * 06:00
   */
  endTime?: string;
  /**
   * @remarks
   * The O&M start time in the HH:mm format.
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

export class GetGatewayElasticPolicyResponseBodyDataElasticPolicy extends $dara.Model {
  /**
   * @remarks
   * The time periods during which AutoHPA scale-out is prohibited.
   */
  disableScaleTimePolicyList?: GetGatewayElasticPolicyResponseBodyDataElasticPolicyDisableScaleTimePolicyList[];
  /**
   * @remarks
   * Indicates whether elastic scaling is enabled.
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
   * AutoHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The time periods during which AutoHPA scale-out is allowed.
   */
  enableScaleTimePolicyList?: GetGatewayElasticPolicyResponseBodyDataElasticPolicyEnableScaleTimePolicyList[];
  /**
   * @remarks
   * The load alert threshold switch for AutoHPA.
   * 
   * @example
   * true
   */
  loadWarningThreshold?: boolean;
  /**
   * @remarks
   * The maximum number of replicas for AutoHPA.
   * 
   * @example
   * 10
   */
  maxUnits?: number;
  /**
   * @remarks
   * The list of CronHPA scheduled policies. Each entry includes units (number of replicas), startTime, and endTime.
   */
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
  /**
   * @remarks
   * The elastic policy configuration, deserialized from the elastic_config JSON field in the database.
   */
  elasticPolicy?: GetGatewayElasticPolicyResponseBodyDataElasticPolicy;
  /**
   * @remarks
   * The KubeOne AutoScaleStrategy instance ID.
   * 
   * @example
   * 123456
   */
  elasticStrategyId?: string;
  /**
   * @remarks
   * The elastic policy type.
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
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
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetGatewayElasticPolicyResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
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

