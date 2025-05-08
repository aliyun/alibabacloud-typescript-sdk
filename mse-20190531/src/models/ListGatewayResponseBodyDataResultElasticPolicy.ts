// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayResponseBodyDataResultElasticPolicyEnableScaleTimePolicyList } from "./ListGatewayResponseBodyDataResultElasticPolicyEnableScaleTimePolicyList";
import { ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList } from "./ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList";


export class ListGatewayResponseBodyDataResultElasticPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled.
   * 
   * @example
   * true
   */
  elastic?: boolean;
  /**
   * @remarks
   * The type of auto scale-out. Valid value:
   * 
   * *   CronHPA: scale-out by time
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  enableScaleTimePolicyList?: ListGatewayResponseBodyDataResultElasticPolicyEnableScaleTimePolicyList[];
  loadWarningThreshold?: boolean;
  /**
   * @remarks
   * The maximum number of instances that are automatically scaled out. This parameter is used for horizontal scale-out.
   * 
   * @example
   * 10
   */
  maxReplica?: number;
  /**
   * @remarks
   * The time policy list for auto scale-out.
   */
  timePolicyList?: ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList[];
  static names(): { [key: string]: string } {
    return {
      elastic: 'Elastic',
      elasticType: 'ElasticType',
      enableScaleTimePolicyList: 'EnableScaleTimePolicyList',
      loadWarningThreshold: 'LoadWarningThreshold',
      maxReplica: 'MaxReplica',
      timePolicyList: 'TimePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elastic: 'boolean',
      elasticType: 'string',
      enableScaleTimePolicyList: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultElasticPolicyEnableScaleTimePolicyList },
      loadWarningThreshold: 'boolean',
      maxReplica: 'number',
      timePolicyList: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList },
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

