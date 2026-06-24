// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKibanaPvlNetworkResponseBodyResultVSwitchIdsZone extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xdefafns***
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'vswitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
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

export class ListKibanaPvlNetworkResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the Kibana private network connection was created.
   * 
   * @example
   * 2024-03-07T06:26:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-bp1tah7zbrwmkjef****
   */
  endpointId?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * es-cn-xxdjfia****-kibana
   */
  endpointName?: string;
  /**
   * @remarks
   * The endpoint status. Valid values:
   * 
   * - Disconnected: not connected.
   * 
   * - Connected: connected.
   * 
   * @example
   * Connected
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The Kibana private network connection ID.
   * 
   * @example
   * es-cn-27a3mul6l***-kibana-internal
   */
  pvlId?: string;
  /**
   * @remarks
   * The list of security groups.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The vSwitch and zone information.
   */
  vSwitchIdsZone?: ListKibanaPvlNetworkResponseBodyResultVSwitchIdsZone[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp16k1dvzxtma*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      endpointId: 'endpointId',
      endpointName: 'endpointName',
      endpointStatus: 'endpointStatus',
      pvlId: 'pvlId',
      securityGroups: 'securityGroups',
      vSwitchIdsZone: 'vSwitchIdsZone',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      pvlId: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitchIdsZone: { 'type': 'array', 'itemType': ListKibanaPvlNetworkResponseBodyResultVSwitchIdsZone },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.vSwitchIdsZone)) {
      $dara.Model.validateArray(this.vSwitchIdsZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPvlNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The array of result objects.
   */
  result?: ListKibanaPvlNetworkResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListKibanaPvlNetworkResponseBodyResult },
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

