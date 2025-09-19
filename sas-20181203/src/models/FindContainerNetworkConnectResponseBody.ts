// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindContainerNetworkConnectResponseBodyConnectsDstContainer extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination container.
   * 
   * @example
   * 48a6dxxx9d5a5866
   */
  containerId?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindContainerNetworkConnectResponseBodyConnectsSrcContainer extends $dara.Model {
  /**
   * @remarks
   * The ID of the source container.
   * 
   * @example
   * 48a6xxx5709d5a5866
   */
  containerId?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindContainerNetworkConnectResponseBodyConnects extends $dara.Model {
  /**
   * @remarks
   * The information about the destination container.
   * 
   * > This parameter is not supported.
   */
  dstContainer?: FindContainerNetworkConnectResponseBodyConnectsDstContainer;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.20.62.176
   */
  dstIp?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 443
   */
  dstPort?: string;
  /**
   * @remarks
   * The timestamp when the connection was first established.
   * 
   * @example
   * 2022-11-11 20:54:32
   */
  firstTime?: number;
  /**
   * @remarks
   * The ID of the network connection.
   * 
   * @example
   * 1458
   */
  id?: number;
  /**
   * @remarks
   * The timestamp when the connection was last established.
   * 
   * @example
   * 2022-11-24 10:26:00
   */
  lastTime?: number;
  /**
   * @remarks
   * The information about the source container.
   * 
   * > This parameter is not supported.
   */
  srcContainer?: FindContainerNetworkConnectResponseBodyConnectsSrcContainer;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 35.233.62.116
   */
  srcIp?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 10240
   */
  srcPort?: string;
  static names(): { [key: string]: string } {
    return {
      dstContainer: 'DstContainer',
      dstIp: 'DstIp',
      dstPort: 'DstPort',
      firstTime: 'FirstTime',
      id: 'Id',
      lastTime: 'LastTime',
      srcContainer: 'SrcContainer',
      srcIp: 'SrcIp',
      srcPort: 'SrcPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstContainer: FindContainerNetworkConnectResponseBodyConnectsDstContainer,
      dstIp: 'string',
      dstPort: 'string',
      firstTime: 'number',
      id: 'number',
      lastTime: 'number',
      srcContainer: FindContainerNetworkConnectResponseBodyConnectsSrcContainer,
      srcIp: 'string',
      srcPort: 'string',
    };
  }

  validate() {
    if(this.dstContainer && typeof (this.dstContainer as any).validate === 'function') {
      (this.dstContainer as any).validate();
    }
    if(this.srcContainer && typeof (this.srcContainer as any).validate === 'function') {
      (this.srcContainer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindContainerNetworkConnectResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindContainerNetworkConnectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the network connections.
   */
  connects?: FindContainerNetworkConnectResponseBodyConnects[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: FindContainerNetworkConnectResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8686CE6E-9BFA-5436-A9D9-77B984AEE7F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connects: 'Connects',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connects: { 'type': 'array', 'itemType': FindContainerNetworkConnectResponseBodyConnects },
      pageInfo: FindContainerNetworkConnectResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connects)) {
      $dara.Model.validateArray(this.connects);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

