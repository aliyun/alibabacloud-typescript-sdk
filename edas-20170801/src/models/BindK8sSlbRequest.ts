// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindK8sSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd-****-****-a286-781659d9f54c
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 712082c3-f554-****-****-a947b5cde6ee
   */
  clusterId?: string;
  /**
   * @remarks
   * The frontend port. The value must be an integer from 1 to 65,535.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The scheduling algorithm. If you do not specify this parameter, \\`rr\\` is used. Valid values:
   * 
   * - wrr: weighted round-robin. Backend servers with higher weights receive more requests.
   * 
   * - rr: round-robin. Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The information about the service ports. Use this parameter to configure multiple listeners or use protocols other than TCP.
   * This parameter must be a JSON array. Example:
   * [{"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"1362469756373809_16c185d6fa2_1914500329_-xxxxxxx","targetPort":8181,"loadBalancerProtocol":"HTTPS"}]
   * 
   * - port: Required. The frontend port. The value must be an integer from 1 to 65,535. Each port number must be unique.
   * 
   * - targetPort: Required. The backend port. The value must be an integer from 1 to 65,535.
   * 
   * - loadBalancerProtocol: Required. The frontend protocol. Valid values: TCP and HTTPS. For HTTP, use TCP.
   * 
   * - certId: Required if you use the HTTPS protocol. You can purchase a certificate in the SLB console.
   * 
   * > This parameter is used to configure multiple listeners. You must use it with the appId, clusterId, type, and slbId parameters.
   * 
   * @example
   * [{"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"136246975637380916c185d6fa21914500329_-988as","targetPort":8181,"lo adBalancerProtocol":"HTTPS"}]
   */
  servicePortInfos?: string;
  /**
   * @remarks
   * The ID of the SLB instance. If you do not specify this parameter, EDAS automatically purchases a new SLB instance.
   * 
   * @example
   * lb-2ze1quax9t****iz82bjt
   */
  slbId?: string;
  /**
   * @remarks
   * The frontend protocol for the SLB instance. Valid values: TCP, HTTP, and HTTPS.
   * 
   * @example
   * TCP
   */
  slbProtocol?: string;
  /**
   * @remarks
   * The specification of the SLB instance.
   * 
   * - slb.s1.small
   * 
   * - slb.s2.small
   * 
   * - slb.s2.medium
   * 
   * - slb.s3.small
   * 
   * - slb.s3.medium
   * 
   * - slb.s3.large
   * 
   * @example
   * slb.s1.small
   */
  specification?: string;
  /**
   * @remarks
   * The backend port. This port is also the service port of the application. The value must be an integer from 1 to 65,535.
   * 
   * @example
   * 8080
   */
  targetPort?: string;
  /**
   * @remarks
   * The type of the SLB instance.
   * 
   * - internet: an internet-facing SLB instance.
   * 
   * - intranet: an internal-facing SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      port: 'Port',
      scheduler: 'Scheduler',
      servicePortInfos: 'ServicePortInfos',
      slbId: 'SlbId',
      slbProtocol: 'SlbProtocol',
      specification: 'Specification',
      targetPort: 'TargetPort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      port: 'string',
      scheduler: 'string',
      servicePortInfos: 'string',
      slbId: 'string',
      slbProtocol: 'string',
      specification: 'string',
      targetPort: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

