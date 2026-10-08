// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterMembersResponseBodyClusterMemberPageClusterMemberListClusterMember extends $dara.Model {
  clusterId?: string;
  clusterMemberId?: string;
  createTime?: number;
  ecsId?: string;
  ecuId?: string;
  privateIp?: string;
  status?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterMemberId: 'ClusterMemberId',
      createTime: 'CreateTime',
      ecsId: 'EcsId',
      ecuId: 'EcuId',
      privateIp: 'PrivateIp',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterMemberId: 'string',
      createTime: 'number',
      ecsId: 'string',
      ecuId: 'string',
      privateIp: 'string',
      status: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBodyClusterMemberPageClusterMemberList extends $dara.Model {
  clusterMember?: ListClusterMembersResponseBodyClusterMemberPageClusterMemberListClusterMember[];
  static names(): { [key: string]: string } {
    return {
      clusterMember: 'ClusterMember',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMember: { 'type': 'array', 'itemType': ListClusterMembersResponseBodyClusterMemberPageClusterMemberListClusterMember },
    };
  }

  validate() {
    if(Array.isArray(this.clusterMember)) {
      $dara.Model.validateArray(this.clusterMember);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBodyClusterMemberPage extends $dara.Model {
  clusterMemberList?: ListClusterMembersResponseBodyClusterMemberPageClusterMemberList;
  /**
   * @remarks
   * The page number of the returned page. If this parameter is not returned, the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of ECS instances returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages returned when all ECS instances are returned based on the specified PageSize parameter.
   * 
   * @example
   * 5
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterMemberList: 'ClusterMemberList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMemberList: ListClusterMembersResponseBodyClusterMemberPageClusterMemberList,
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(this.clusterMemberList && typeof (this.clusterMemberList as any).validate === 'function') {
      (this.clusterMemberList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ECS instances in the cluster.
   */
  clusterMemberPage?: ListClusterMembersResponseBodyClusterMemberPage;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMemberPage: 'ClusterMemberPage',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMemberPage: ListClusterMembersResponseBodyClusterMemberPage,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterMemberPage && typeof (this.clusterMemberPage as any).validate === 'function') {
      (this.clusterMemberPage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

