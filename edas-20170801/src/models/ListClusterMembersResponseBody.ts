// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterMembersResponseBodyClusterMemberPageClusterMemberListClusterMember extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 52984524-6d48-4bbd-85f2-a34b0e5b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the ECS instance in the cluster.
   * 
   * @example
   * adb03eeb-3adf-4d7e-afe1-03d1ad45****
   */
  clusterMemberId?: string;
  /**
   * @remarks
   * The timestamp when the ECS instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281038175
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2zej4i2jdf3ntwhj****
   */
  ecsId?: string;
  /**
   * @remarks
   * The unique ID of the elastic compute unit (ECU). You can run the `dmidecode` command on the ECS instance to query the ECU ID.
   * 
   * @example
   * 70ed3f59-b476-49aa-be09-9e6c375d****
   */
  ecuId?: string;
  /**
   * @remarks
   * The private IP address for the ECS instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  privateIp?: string;
  /**
   * @remarks
   * The state of the ECS instance. Valid values:
   * 
   * *   1: The instance is running.
   * *   0: The instance is being converted.
   * *   \\-1: The instance fails to be converted.
   * *   \\-2: The instance is offline.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The timestamp when the ECS instance was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281041113
   */
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
  /**
   * @remarks
   * The list of ECS instances in the cluster.
   */
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

