// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeInfoForPodResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-****
   */
  clusterId?: string;
  /**
   * @remarks
   * Lingjun Hdeni Network Interface IPV6 address Quota
   * 
   * @example
   * 10
   */
  hdeniIpv6SipQuota?: number;
  /**
   * @remarks
   * Lingjun Gaomi network interface controller quota
   * 
   * @example
   * 10
   */
  hdeniQuota?: number;
  /**
   * @remarks
   * Lingjun Hdeni Network Interface IPV4 address Quota
   * 
   * @example
   * 10
   */
  hdeniSipQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface IPV6 address Quota
   * 
   * @example
   * 10
   */
  leniIpv6SipQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface quota, including system type
   * 
   * @example
   * 10
   */
  leniQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface Secondary Private IP Quota
   * 
   * @example
   * 10
   */
  leniSipQuota?: number;
  /**
   * @remarks
   * Lingjun network interface controller Secondary Private IP Quota
   * 
   * @example
   * 10
   */
  lniSipQuota?: number;
  /**
   * @remarks
   * The ID of the node for this operation.
   * 
   * @example
   * node-be70****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * List of VSwitches that can apply for IP addresses on this node
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the Virtual Private Cloud to which the current node belongs.
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hdeniIpv6SipQuota: 'HdeniIpv6SipQuota',
      hdeniQuota: 'HdeniQuota',
      hdeniSipQuota: 'HdeniSipQuota',
      leniIpv6SipQuota: 'LeniIpv6SipQuota',
      leniQuota: 'LeniQuota',
      leniSipQuota: 'LeniSipQuota',
      lniSipQuota: 'LniSipQuota',
      nodeId: 'NodeId',
      regionId: 'RegionId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hdeniIpv6SipQuota: 'number',
      hdeniQuota: 'number',
      hdeniSipQuota: 'number',
      leniIpv6SipQuota: 'number',
      leniQuota: 'number',
      leniSipQuota: 'number',
      lniSipQuota: 'number',
      nodeId: 'string',
      regionId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInfoForPodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetNodeInfoForPodResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:GetNodeInfoForPod, arn=acs:eflo:cn-wulanchabu:1111156667137893:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetNodeInfoForPodResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

