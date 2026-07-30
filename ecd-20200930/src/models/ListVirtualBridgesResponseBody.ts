// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualBridgesResponseBodyBridges extends $dara.Model {
  /**
   * @remarks
   * The access type of the management page.
   * 
   * @example
   * intranet
   */
  accessType?: string;
  /**
   * @remarks
   * The virtual bridge ID.
   * 
   * @example
   * vb-sfijaosifiosjfoij***
   */
  bridgeId?: string;
  /**
   * @remarks
   * The virtual bridge specifications.
   * 
   * @example
   * vb.pro
   */
  bridgeLevel?: string;
  /**
   * @remarks
   * The virtual bridge status.
   * 
   * @example
   * inuse
   */
  bridgeStatus?: string;
  /**
   * @remarks
   * The third-party plugin type of the virtual bridge.
   * 
   * @example
   * panbit
   */
  bridgeType?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-11-07T02:02:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The internal network address.
   * 
   * @example
   * http://10.0.0.0:8080
   */
  intranetUrl?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-shenzhen+dir-8485473914
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * hk11
   */
  officeSiteName?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      bridgeId: 'BridgeId',
      bridgeLevel: 'BridgeLevel',
      bridgeStatus: 'BridgeStatus',
      bridgeType: 'BridgeType',
      expireTime: 'ExpireTime',
      intranetUrl: 'IntranetUrl',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      bridgeId: 'string',
      bridgeLevel: 'string',
      bridgeStatus: 'string',
      bridgeType: 'string',
      expireTime: 'string',
      intranetUrl: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualBridgesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The virtual bridge information.
   */
  bridges?: ListVirtualBridgesResponseBodyBridges[];
  /**
   * @remarks
   * The maximum number of entries returned. Valid values: 1 to 100. If this parameter is not specified, the default value 100 is used.
   * The number of returned entries can be less than the specified value but cannot exceed it.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bridges: 'Bridges',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridges: { 'type': 'array', 'itemType': ListVirtualBridgesResponseBodyBridges },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bridges)) {
      $dara.Model.validateArray(this.bridges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

