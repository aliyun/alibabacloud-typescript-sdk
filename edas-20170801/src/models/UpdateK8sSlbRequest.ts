// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Call [ListApplication](https://help.aliyun.com/document_detail/149390.html) to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd-****-****-a286-781659d9f54c
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the cluster. Call [GetK8sCluster](https://help.aliyun.com/document_detail/181437.html) to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 712082c3-****-****-9217-a947b5cde6ee
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to disable overwriting the SLB listener configuration.
   * 
   * - true: Disables overwriting.
   * 
   * - false: Allows overwriting.
   * 
   * @example
   * true
   */
  disableForceOverride?: boolean;
  /**
   * @remarks
   * The frontend port. The value ranges from 1 to 65535.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The scheduling algorithm of the SLB instance. If you do not set this parameter, rr is used. The supported algorithms are round-robin (rr) and weighted round-robin (wrr).
   * 
   * - Weighted round-robin (wrr): Backend servers with higher weights receive more requests.
   * 
   * - Round-robin (rr): Requests are distributed to backend servers in sequence.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * This parameter is used for scenarios that involve multiple ports or protocols other than TCP. The value must be a JSON array. For example:
   * [{"targetPort":8080,"port":82,"loadBalancerProtocol":"TCP"},{"port":81,"certId":"1362469756373809_16c185d6fa2_1914500329_-xxxxxxx","targetPort":8181,"loadBalancerProtocol":"HTTPS"}]
   * 
   * - port: Required. The frontend port. The value ranges from 1 to 65535. Each port number must be unique.
   * 
   * - targetPort: Required. The backend port. The value ranges from 1 to 65535.
   * 
   * - loadBalancerProtocol: Required. Only TCP and HTTPS are supported. For HTTP listeners, set this parameter to TCP.
   * 
   * - certId: This parameter is required for HTTPS listeners. It specifies the ID of a certificate that you can purchase in the SLB console.
   * 
   * - Note: This parameter is used to support multiple ports and must be used with the appId, clusterId, type, and slbId parameters.
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
   * The protocol of the SLB instance. Currently, only TCP is supported.
   * 
   * @example
   * TCP
   */
  slbProtocol?: string;
  /**
   * @remarks
   * The specification of the SLB instance. The following specifications are supported:
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
   * If you do not set this parameter, the default value is slb.s1.small.
   * 
   * @example
   * slb.s1.small
   */
  specification?: string;
  /**
   * @remarks
   * The backend port, which is the service port of the application. The value ranges from 1 to 65535.
   * 
   * @example
   * 8082
   */
  targetPort?: string;
  /**
   * @remarks
   * The type of the SLB instance.
   * 
   * - Internet: An Internet-facing instance.
   * 
   * - Intranet: An internal-facing instance.
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

