// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindContainerNetworkConnectResponseBodyConnectsDstContainer extends $dara.Model {
  /**
   * @remarks
   * The container ID.
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
   * The container ID.
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
   * The destination container information.
   * 
   * >Notice: This parameter is not supported..
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
   * The timestamp when the connection first occurred. Unit: milliseconds.
   * 
   * @example
   * 1636077279174
   */
  firstTime?: number;
  /**
   * @remarks
   * The network connectivity ID.
   * 
   * @example
   * 1458
   */
  id?: number;
  /**
   * @remarks
   * The timestamp when the connection most recently occurred. Unit: milliseconds.
   * 
   * @example
   * 1636595679174
   */
  lastTime?: number;
  /**
   * @remarks
   * The source container information.
   * >Notice: This parameter is not supported..
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
   * The source port number.
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
   * The number of entries returned on the current page in the paging query.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The current page number in the paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in the paging query. Default value: **20**, which indicates that 20 network connectivity entries are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of connections returned.
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
   * The network connectivity information.
   */
  connects?: FindContainerNetworkConnectResponseBodyConnects[];
  /**
   * @remarks
   * The paging information for the query.
   */
  pageInfo?: FindContainerNetworkConnectResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

