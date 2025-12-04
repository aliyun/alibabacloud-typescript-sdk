// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInfosForPodResponseBodyContent extends $dara.Model {
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
   * Lingjun Gaomi network interface controller quota
   * 
   * @example
   * 10
   */
  hdeniQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface quota, excluding system type
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
   * List of VSwitches to which IP addresses can be applied for this node
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
      hdeniQuota: 'HdeniQuota',
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
      hdeniQuota: 'number',
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

export class ListNodeInfosForPodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
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
   * Response body
   */
  content?: ListNodeInfosForPodResponseBodyContent[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
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
      content: { 'type': 'array', 'itemType': ListNodeInfosForPodResponseBodyContent },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

