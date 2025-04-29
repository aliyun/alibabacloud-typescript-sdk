// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The threshold specified when the step scaling rule is executed. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 1.0
   */
  breachThreshold?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The metric value specified when the step scaling rule is executed. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 1.0
   */
  metricValue?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique identifier of the scaling rule.
   * 
   * >  You can call this operation to execute simple scaling rules and step scaling rules. If you want to call this operation to execute a step scaling rule, you must specify `BreachThreshold` and `MetricValue`.
   * 
   * This parameter is required.
   * 
   * @example
   * ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****
   */
  scalingRuleAri?: string;
  static names(): { [key: string]: string } {
    return {
      breachThreshold: 'BreachThreshold',
      clientToken: 'ClientToken',
      metricValue: 'MetricValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleAri: 'ScalingRuleAri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breachThreshold: 'number',
      clientToken: 'string',
      metricValue: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingRuleAri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

