// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSwimLaneListResponseBodySwimLaneList extends $dara.Model {
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
   * The request routing rules.
   * 
   * @example
   * [{"Domains":["*"],"RouteName":"r1","MatchRequest":{"Headers":[{"Name":"x-asm-prefer-tag","MatchingMode":"exact","MatchingContent":"s1"}],"URI":{"MatchingMode":"exact","MatchingContent":"/mock"}},"RouteDestinations":[{"Destination":{"Host":"mocka.default.svc.cluster.local","Subset":"s1"}}]},{"Domains":["*"],"RouteName":"hello","MatchRequest":{"Headers":[{"Name":"x-asm-prefer-tag","MatchingMode":"exact","MatchingContent":"s1"}],"URI":{"MatchingMode":"exact","MatchingContent":"/mocktest"}},"RouteDestinations":[{"Destination":{"Host":"mocka.default.svc.cluster.local","Subset":"s1"}}]}]
   */
  ingressRule?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * mocka.default.svc.cluster.local
   */
  ingressService?: string;
  /**
   * @remarks
   * The label key of the associated service workload. The value is fixed as `ASM_TRAFFIC_TAG`.
   * 
   * @example
   * ASM_TRAFFIC_TAG
   */
  labelSelectorKey?: string;
  /**
   * @remarks
   * The label value of the associated service workload. The value is fixed as `ASM_TRAFFIC_TAG`.
   * 
   * @example
   * v1
   */
  labelSelectorValue?: string;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * s1
   */
  name?: string;
  /**
   * @remarks
   * Services associated with the lane.
   * 
   * @example
   * ["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]
   */
  serviceList?: string;
  /**
   * @remarks
   * The verification messages of the lane group. If the service does not exist in the lane group, the verification message is displayed in the verification messages of the lane group.
   * 
   * @example
   * [{"code":"CODE_UNEFFECTED_SWIMLANE_LABEL","level":"warning","message":"The label selector defined in the ASMSwimLane has no effect on any workload instance."}]
   */
  validationMessage?: string;
  /**
   * @remarks
   * This parameter is returned only when the IngressRoutingStrategy parameter is set to weighted. This parameter indicates the domain name of Services in each lane and the request routing weight. The value of this parameter is a serialized JSON string.
   * 
   * @example
   * {"RouteDestination":{"Host":"mocka.default.svc.cluster.local","Subset":"s1"},"Weight":40}
   */
  weightedIngressDestinatin?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ingressRule: 'IngressRule',
      ingressService: 'IngressService',
      labelSelectorKey: 'LabelSelectorKey',
      labelSelectorValue: 'LabelSelectorValue',
      name: 'Name',
      serviceList: 'ServiceList',
      validationMessage: 'ValidationMessage',
      weightedIngressDestinatin: 'WeightedIngressDestinatin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ingressRule: 'string',
      ingressService: 'string',
      labelSelectorKey: 'string',
      labelSelectorValue: 'string',
      name: 'string',
      serviceList: 'string',
      validationMessage: 'string',
      weightedIngressDestinatin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimLaneListResponseBody extends $dara.Model {
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
   * The swimlanes.
   */
  swimLaneList?: GetSwimLaneListResponseBodySwimLaneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      swimLaneList: 'SwimLaneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      swimLaneList: { 'type': 'array', 'itemType': GetSwimLaneListResponseBodySwimLaneList },
    };
  }

  validate() {
    if(Array.isArray(this.swimLaneList)) {
      $dara.Model.validateArray(this.swimLaneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

