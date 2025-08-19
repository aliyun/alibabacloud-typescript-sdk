// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointsResponseBodyResultEndpointZones extends $dara.Model {
  /**
   * @example
   * vsw-bp194pz9iez****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Pending
   */
  connectionStatus?: string;
  /**
   * @example
   * 1701259721
   */
  created?: number;
  /**
   * @example
   * ep-bp1i522d****a3.epsrv-bp1f****gei.cn-hangzhou.privatelink.aliyuncs.com
   */
  domain?: string;
  /**
   * @example
   * essep-2f46b743f60****
   */
  endpointId?: string;
  endpointZones?: ListEndpointsResponseBodyResultEndpointZones[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ep-bp1id41dd116e52e****
   */
  resourceId?: string;
  securityGroupIds?: string[];
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * 1701259721
   */
  updated?: number;
  /**
   * @example
   * vpc-uf6gykvwcirp886ef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'connectionStatus',
      created: 'created',
      domain: 'domain',
      endpointId: 'endpointId',
      endpointZones: 'endpointZones',
      name: 'name',
      resourceId: 'resourceId',
      securityGroupIds: 'securityGroupIds',
      status: 'status',
      type: 'type',
      updated: 'updated',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      created: 'number',
      domain: 'string',
      endpointId: 'string',
      endpointZones: { 'type': 'array', 'itemType': ListEndpointsResponseBodyResultEndpointZones },
      name: 'string',
      resourceId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      type: 'string',
      updated: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointZones)) {
      $dara.Model.validateArray(this.endpointZones);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBody extends $dara.Model {
  /**
   * @example
   * D6030CE6-9FEB-5B2F-84AC-3ADE3CBA89E5
   */
  requestId?: string;
  result?: ListEndpointsResponseBodyResult[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListEndpointsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

