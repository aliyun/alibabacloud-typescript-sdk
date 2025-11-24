// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateASMGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The YAML content that is used to create the ASM gateway.
   * 
   * @example
   * {"apiVersion":"istio.alibabacloud.com/v1beta1","kind":"IstioGateway","metadata":{"name":"ingressgateway","namespace":"istio-system"},"spec":{"gatewayType":"ingress","clusterIds":["xxxxx"],"ports":[{"name":"http-0","port":80,"targetPort":80,"protocol":"TCP"},{"name":"https-1","port":443,"targetPort":443,"protocol":"TCP"}],"serviceAnnotations":{"service.beta.kubernetes.io/alicloud-loadbalancer-address-type":"internet","service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec":"slb.s1.small"},"replicaCount":2,"resources":{"limits":{"cpu":"2","memory":"4G"},"requests":{"cpu":"200m","memory":"256Mi"}},"serviceType":"LoadBalancer","maxReplicas":2,"minReplicas":2}}
   */
  body?: string;
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * @example
   * ingressgateway
   */
  istioGatewayName?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      istioGatewayName: 'IstioGatewayName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      istioGatewayName: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

