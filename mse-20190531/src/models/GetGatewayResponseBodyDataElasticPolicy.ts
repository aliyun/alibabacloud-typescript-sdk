// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayResponseBodyDataElasticPolicyTimePolicyList } from "./GetGatewayResponseBodyDataElasticPolicyTimePolicyList";


export class GetGatewayResponseBodyDataElasticPolicy extends $dara.Model {
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
  /**
   * @remarks
   * The maximum number of instances that are automatically scaled out. This parameter is used for horizontal scale-out.
   * 
   * @example
   * 5
   */
  maxReplica?: number;
  /**
   * @remarks
   * The policy of scale-out by time.
   */
  timePolicyList?: GetGatewayResponseBodyDataElasticPolicyTimePolicyList[];
  static names(): { [key: string]: string } {
    return {
      elasticType: 'ElasticType',
      maxReplica: 'MaxReplica',
      timePolicyList: 'TimePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticType: 'string',
      maxReplica: 'number',
      timePolicyList: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataElasticPolicyTimePolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.timePolicyList)) {
      $dara.Model.validateArray(this.timePolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

