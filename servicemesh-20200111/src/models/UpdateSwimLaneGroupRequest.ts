// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the baseline lane in the lane group if the lane group is in permissive mode. This parameter is valid only for a lane group in permissive mode.
   * 
   * @example
   * s1
   */
  fallbackTarget?: string;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The policy used to route requests among multiple lanes in a lane group. Valid values:
   * 
   * *   weighted: a weight-based request routing policy. Requests are matched based on uniform rules and then routed to different lanes in a lane group at a specified ratio.
   * *   rule-based: a rule-based request routing policy. Each lane is configured with request routing rules. Only requests that match the request routing rules of a specific lane are routed to the lane.
   * 
   * @example
   * weighted
   */
  ingressRoutingStrategy?: string;
  serviceLevelFallbackTarget?: string;
  /**
   * @remarks
   * The Service Mesh (ASM) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * A list of services associated with the lane group.
   * 
   * @example
   * ["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]
   */
  servicesList?: string;
  /**
   * @remarks
   * The weight-based request routing rules for a lane group. You can specify this parameter only when the IngressRoutingStrategy parameter is set to weighted.
   * 
   * @example
   * {"Domains":["*"],"MatchRequests":[{"URI":{"MatchingMode":"exact","MatchingContent":"/mock"},"Headers":[{"Name":"test","MatchingMode":"exact","MatchingContent":"yes"}]}]}
   */
  weightedIngressRule?: string;
  static names(): { [key: string]: string } {
    return {
      fallbackTarget: 'FallbackTarget',
      groupName: 'GroupName',
      ingressRoutingStrategy: 'IngressRoutingStrategy',
      serviceLevelFallbackTarget: 'ServiceLevelFallbackTarget',
      serviceMeshId: 'ServiceMeshId',
      servicesList: 'ServicesList',
      weightedIngressRule: 'WeightedIngressRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbackTarget: 'string',
      groupName: 'string',
      ingressRoutingStrategy: 'string',
      serviceLevelFallbackTarget: 'string',
      serviceMeshId: 'string',
      servicesList: 'string',
      weightedIngressRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

