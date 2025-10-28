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
   * The frontend port. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The scheduling algorithm for the SLB instance. If you do not specify this parameter, the default value rr is used. Valid values:
   * 
   * *   wrr: weighted round-robin scheduling. Backend servers that have higher weights receive more requests than those that have lower weights.
   * *   rr: round-robin scheduling. Requests are sequentially distributed to backend servers.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The information about the ports. This parameter is required if you want to configure multi-port mappings or use a protocol other than TCP. You must set this parameter to a JSON array. Example: [{"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"1362469756373809_16c185d6fa2_1914500329_-xxxxxxx","targetPort":8181,"lo adBalancerProtocol":"HTTPS"}]
   * 
   * *   port: The frontend port. Valid values: 1 to 65535. This parameter is required. Each port must be unique.
   * *   targetPort: The backend port. Valid values: 1 to 65535. This parameter is required.
   * *   loadBalancerProtocol: This parameter is required. Valid values: TCP and HTTPS. If the HTTP protocol is used, set this parameter to TCP.
   * *   certId: the ID of the certificate. This parameter is required if the HTTPS protocol is used. You can purchase an SLB instance in the SLB console.
   * 
   * > The ServicePortInfos parameter is specified to support multi-port mappings. If you want this parameter to take effect, make sure that you have set the AppId, ClusterId, Type, and SlbId parameters.
   * 
   * @example
   * [{"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"136246975637380916c185d6fa21914500329_-988as","targetPort":8181,"lo adBalancerProtocol":"HTTPS"}]
   */
  servicePortInfos?: string;
  /**
   * @remarks
   * The ID of the SLB instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
   * 
   * @example
   * lb-2ze1quax9t****iz82bjt
   */
  slbId?: string;
  /**
   * @remarks
   * The protocol used by the SLB instance. Valid values: TCP, HTTP, and HTTPS.
   * 
   * @example
   * TCP
   */
  slbProtocol?: string;
  /**
   * @remarks
   * The instance type of the SLB instance. Valid values:
   * 
   * *   slb.s1.small
   * *   slb.s2.small
   * *   slb.s2.medium
   * *   slb.s3.small
   * *   slb.s3.medium
   * *   slb.s3.large
   * 
   * @example
   * slb.s1.small
   */
  specification?: string;
  /**
   * @remarks
   * The backend port, which is also the service port of the application. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  targetPort?: string;
  /**
   * @remarks
   * The type of the SLB instance. Valid values:
   * 
   * *   internet: Internet-facing SLB instance
   * *   intranet: internal-facing SLB instance
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

