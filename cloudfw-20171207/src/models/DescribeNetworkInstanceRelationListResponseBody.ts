// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListAssociatedCen extends $dara.Model {
  attachmentId?: string;
  attachmentName?: string;
  cenId?: string;
  cenName?: string;
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
  attachmentId?: string;
  attachmentName?: string;
  cenId?: string;
  cenName?: string;
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
  associatedCen?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceListAssociatedCen[];
  /**
   * @example
   * vpc-dsf232d****
   */
  networkInstanceId?: string;
  /**
   * @example
   * vpc-test
   */
  networkInstanceName?: string;
  /**
   * @example
   * vpc
   */
  networkInstanceType?: string;
  /**
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
  associatedCen?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListAssociatedCen[];
  /**
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @example
   * vpc-2vcwfqbrh4kr****
   */
  networkInstanceId?: string;
  /**
   * @example
   * vpc-test
   */
  networkInstanceName?: string;
  /**
   * @example
   * VPC
   */
  networkInstanceType?: string;
  peerNetworkInstanceList?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceListPeerNetworkInstanceList[];
  /**
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
  networkInstanceList?: DescribeNetworkInstanceRelationListResponseBodyNetworkInstanceList[];
  /**
   * @example
   * 284FF89D-4F70-546F-8EF6-77E0A530****
   */
  requestId?: string;
  /**
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

