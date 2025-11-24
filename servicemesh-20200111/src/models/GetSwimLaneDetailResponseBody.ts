// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSwimLaneDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The traffic routing rule that routes traffic to the lane by using the ingress gateway. The traffic routing rule contains one or more custom routes.
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
   * The label key of the associated service workload. The value is fixed as **ASM_TRAFFIC_TAG**.
   * 
   * @example
   * ASM_TRAFFIC_TAG
   */
  labelSelectorKey?: string;
  /**
   * @remarks
   * The value of ASM_TRAFFIC_TAG.
   * 
   * @example
   * v1
   */
  labelSelectorValue?: string;
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
   * A list of services associated with the lane.
   * 
   * @example
   * ["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]
   */
  servicesList?: string;
  /**
   * @remarks
   * The status of the swimlane. If the configuration is successful and takes effect, a `null` is returned. Otherwise, an error message is returned.
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
  weightedIngressDestination?: string;
  static names(): { [key: string]: string } {
    return {
      ingressRule: 'IngressRule',
      ingressService: 'IngressService',
      labelSelectorKey: 'LabelSelectorKey',
      labelSelectorValue: 'LabelSelectorValue',
      requestId: 'RequestId',
      servicesList: 'ServicesList',
      validationMessage: 'ValidationMessage',
      weightedIngressDestination: 'WeightedIngressDestination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressRule: 'string',
      ingressService: 'string',
      labelSelectorKey: 'string',
      labelSelectorValue: 'string',
      requestId: 'string',
      servicesList: 'string',
      validationMessage: 'string',
      weightedIngressDestination: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

