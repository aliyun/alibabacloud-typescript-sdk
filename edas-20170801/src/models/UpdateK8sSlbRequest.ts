// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can query the application ID by calling the ListApplication operation. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd-****-****-a286-781659d9f54c
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the cluster. You can query the cluster ID by calling the GetK8sCluster operation. For more information, see [GetK8sCluster](https://help.aliyun.com/document_detail/181437.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 712082c3-****-****-9217-a947b5cde6ee
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to disable listener configuration overriding.
   * 
   * *   true: disables listener configuration overriding.
   * *   false: enables listener configuration overriding.
   * 
   * @example
   * true
   */
  disableForceOverride?: boolean;
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
   * The scheduling algorithm for the SLB instance. If you do not specify this parameter, the default value rr is used. SLB supports the following scheduling algorithms: round-robin and weighted round-robin. Valid values:
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
   * *   port: required. The frontend port. Valid values: 1 to 65535. Each port must be unique.
   * *   targetPort: required. The backend port. Valid values: 1 to 65535.
   * *   loadBalancerProtocol: required. Valid values: TCP and HTTPS. If the HTTP protocol is used, set this parameter to TCP.
   * *   certId: the ID of the certificate. This parameter is required if the HTTPS protocol is used. You can purchase an SLB instance in the SLB console.
   * *   Note: The ServicePortInfos parameter is specified to support multi-port mappings. If you want this parameter to take effect, make sure that you specify the AppId, ClusterId, Type, and SlbId parameters.
   * 
   * @example
   * {"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"136246975637380916c185d6fa21914500329_-xxxxxxx","targetPort":8181,"lo adBalancerProtocol":"HTTPS"}
   */
  servicePortInfos?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * SLB_doctest
   */
  slbName?: string;
  /**
   * @remarks
   * The protocol used by the SLB instance. Set the value to TCP.
   * 
   * @example
   * TCP
   */
  slbProtocol?: string;
  /**
   * @remarks
   * The specifications of the SLB instance.
   * 
   * *   slb.s1.small
   * *   slb.s2.small
   * *   slb.s2.medium
   * *   slb.s3.small
   * *   slb.s3.medium
   * *   slb.s3.large
   * 
   * If you do not specify this parameter, the default value slb.s1.small is used.
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
   * 8082
   */
  targetPort?: string;
  /**
   * @remarks
   * The type of the SLB instance. Valid values:
   * 
   * *   Internet: an Internet-facing SLB instance
   * *   Intranet: an internal-facing SLB instance
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      disableForceOverride: 'DisableForceOverride',
      port: 'Port',
      scheduler: 'Scheduler',
      servicePortInfos: 'ServicePortInfos',
      slbName: 'SlbName',
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
      disableForceOverride: 'boolean',
      port: 'string',
      scheduler: 'string',
      servicePortInfos: 'string',
      slbName: 'string',
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

