// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoleZoneInfoResponseBodyNodeNodeInfo extends $dara.Model {
  currentBandWidth?: number;
  currentMinorVersion?: string;
  custinsId?: string;
  defaultBandWidth?: number;
  insName?: string;
  insType?: number;
  isLatestVersion?: number;
  isOpenBandWidthService?: boolean;
  nodeId?: string;
  nodeType?: string;
  role?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      currentBandWidth: 'CurrentBandWidth',
      currentMinorVersion: 'CurrentMinorVersion',
      custinsId: 'CustinsId',
      defaultBandWidth: 'DefaultBandWidth',
      insName: 'InsName',
      insType: 'InsType',
      isLatestVersion: 'IsLatestVersion',
      isOpenBandWidthService: 'IsOpenBandWidthService',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      role: 'Role',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentBandWidth: 'number',
      currentMinorVersion: 'string',
      custinsId: 'string',
      defaultBandWidth: 'number',
      insName: 'string',
      insType: 'number',
      isLatestVersion: 'number',
      isOpenBandWidthService: 'boolean',
      nodeId: 'string',
      nodeType: 'string',
      role: 'string',
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

export class DescribeRoleZoneInfoResponseBodyNode extends $dara.Model {
  nodeInfo?: DescribeRoleZoneInfoResponseBodyNodeNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeRoleZoneInfoResponseBodyNodeNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBody extends $dara.Model {
  node?: DescribeRoleZoneInfoResponseBodyNode;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 224B97FB-A275-4EAC-86E9-8922FEA2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: DescribeRoleZoneInfoResponseBodyNode,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

