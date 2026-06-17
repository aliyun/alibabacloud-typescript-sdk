// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListAssociatedCen extends $dara.Model {
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-b92yqn***
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * @example
   * att-test1
   */
  attachmentName?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-sdij1***
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * test
   */
  cenName?: string;
  /**
   * @remarks
   * The type of the transit router. Valid values:
   * 
   * - **Basic**: Basic Edition transit router.
   * 
   * - **Enterprise**: Enterprise Edition transit router.
   * 
   * @example
   * Enterprise
   */
  transitRouterType?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      cenId: 'CenId',
      cenName: 'CenName',
      transitRouterType: 'TransitRouterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      cenId: 'string',
      cenName: 'string',
      transitRouterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceListAssociatedCen extends $dara.Model {
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-b9dyqn***
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * @example
   * att-test2
   */
  attachmentName?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-sdij1***
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * test
   */
  cenName?: string;
  /**
   * @remarks
   * The version of the transit router. Valid values:
   * 
   * - **Basic**: Basic Edition transit router.
   * 
   * - **Enterprise**: Enterprise Edition transit router.
   * 
   * @example
   * Enterprise
   */
  transitRouterType?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      cenId: 'CenId',
      cenName: 'CenName',
      transitRouterType: 'TransitRouterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      cenId: 'string',
      cenName: 'string',
      transitRouterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceList extends $dara.Model {
  /**
   * @remarks
   * The associated CEN instance.
   */
  associatedCen?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceListAssociatedCen[];
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-dsf232d****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * vpc-test
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance.
   * 
   * @example
   * vpc
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      associatedCen: 'AssociatedCen',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCen: { 'type': 'array', 'itemType': DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceListAssociatedCen },
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedCen)) {
      $dara.Model.validateArray(this.associatedCen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceList extends $dara.Model {
  /**
   * @remarks
   * The associated CEN instance.
   */
  associatedCen?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListAssociatedCen[];
  /**
   * @remarks
   * The connection type.
   * 
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-2vcwfqbrh4kr****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * vpc-test
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance.
   * 
   * @example
   * VPC
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The list of peer network instances.
   */
  peerNetworkInstanceList?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceList[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      associatedCen: 'AssociatedCen',
      connectType: 'ConnectType',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      peerNetworkInstanceList: 'PeerNetworkInstanceList',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCen: { 'type': 'array', 'itemType': DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListAssociatedCen },
      connectType: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      peerNetworkInstanceList: { 'type': 'array', 'itemType': DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceList },
      regionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedCen)) {
      $dara.Model.validateArray(this.associatedCen);
    }
    if(Array.isArray(this.peerNetworkInstanceList)) {
      $dara.Model.validateArray(this.peerNetworkInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInstanceRelationListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the network instances.
   */
  networkInstanceList?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 284FF89D-4F70-546F-8EF6-77E0A530****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInstanceList: 'NetworkInstanceList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInstanceList: { 'type': 'array', 'itemType': DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkInstanceList)) {
      $dara.Model.validateArray(this.networkInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

