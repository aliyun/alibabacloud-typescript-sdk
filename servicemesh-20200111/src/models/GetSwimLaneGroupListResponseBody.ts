// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSwimLaneGroupListResponseBodySwimLaneGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the baseline lane of the lane group in permissive mode. This parameter is valid only for a lane group in permissive mode.
   * 
   * @example
   * s1
   */
  fallbackTarget?: string;
  /**
   * @remarks
   * The name of a lane group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the ASM ingress gateway.
   * 
   * @example
   * ingressgateway
   */
  ingressGatewayName?: string;
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
  /**
   * @remarks
   * The type of gateways in which you can configure request routing rules. You can configure request routing rules only in ASM gateways.
   * 
   * @example
   * ASM
   */
  ingressType?: string;
  /**
   * @remarks
   * Indicates whether the lane group is in permissive mode.
   * 
   * @example
   * false
   */
  isPermissive?: boolean;
  /**
   * @remarks
   * The request routing header of the lane group. It is valid only for a lane group in permissive mode.
   * 
   * @example
   * x-asm-prefer-tag
   */
  routeHeader?: string;
  serviceLevelFallbackTarget?: string;
  /**
   * @remarks
   * The Services associated with the lane group.
   * 
   * @example
   * ["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]
   */
  serviceList?: string;
  /**
   * @remarks
   * A serialized JSON string. The keys of the JSON object are the keys of the labels owned by all services in the lane group, and the values of the JSON object are arrays of all possible label values of the services in the lane group.
   * 
   * @example
   * {"ASM_TRAFFIC_TAG":["v2","v3","v1"],"version":["v3","v1","v2"]}
   */
  swimLaneLabels?: string;
  /**
   * @remarks
   * The end-to-end (E2E) pass-through request header of the lane group. It is valid only for a lane group in permissive mode.
   * 
   * @example
   * my-request-id
   */
  traceHeader?: string;
  /**
   * @remarks
   * The weight-based request routing rules for a lane group. This parameter is returned only when the IngressRoutingStrategy parameter is set to weighted.
   * 
   * @example
   * {"Domains":["*"],"MatchRequests":[{"URI":{"MatchingMode":"exact","MatchingContent":"/mock"},"Headers":[{"Name":"test","MatchingMode":"exact","MatchingContent":"yes"}]}]}
   */
  weightedIngressRule?: string;
  static names(): { [key: string]: string } {
    return {
      fallbackTarget: 'FallbackTarget',
      groupName: 'GroupName',
      ingressGatewayName: 'IngressGatewayName',
      ingressRoutingStrategy: 'IngressRoutingStrategy',
      ingressType: 'IngressType',
      isPermissive: 'IsPermissive',
      routeHeader: 'RouteHeader',
      serviceLevelFallbackTarget: 'ServiceLevelFallbackTarget',
      serviceList: 'ServiceList',
      swimLaneLabels: 'SwimLaneLabels',
      traceHeader: 'TraceHeader',
      weightedIngressRule: 'WeightedIngressRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbackTarget: 'string',
      groupName: 'string',
      ingressGatewayName: 'string',
      ingressRoutingStrategy: 'string',
      ingressType: 'string',
      isPermissive: 'boolean',
      routeHeader: 'string',
      serviceLevelFallbackTarget: 'string',
      serviceList: 'string',
      swimLaneLabels: 'string',
      traceHeader: 'string',
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

export class GetSwimLaneGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * yyyy
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the lane group.
   */
  swimLaneGroupList?: GetSwimLaneGroupListResponseBodySwimLaneGroupList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      swimLaneGroupList: 'SwimLaneGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      swimLaneGroupList: { 'type': 'array', 'itemType': GetSwimLaneGroupListResponseBodySwimLaneGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.swimLaneGroupList)) {
      $dara.Model.validateArray(this.swimLaneGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

