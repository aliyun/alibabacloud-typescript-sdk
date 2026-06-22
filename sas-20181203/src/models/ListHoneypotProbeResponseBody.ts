// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotProbeResponseBodyListControlNode extends $dara.Model {
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-uf6eq0rlvu1mkh0p****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 8ec9da17-c0e7-4642-aad6-defc9722****
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * HoneypotNode1
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotProbeResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The management node data.
   */
  controlNode?: ListHoneypotProbeResponseBodyListControlNode;
  /**
   * @remarks
   * The deployment time.
   * 
   * @example
   * 1669363825000
   */
  deployTime?: number;
  /**
   * @remarks
   * The probe name.
   * 
   * @example
   * prod-pinpoint-hd1b
   */
  displayName?: string;
  /**
   * @remarks
   * The local IP address bound to the probe.
   * 
   * @example
   * 33.53.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The operating system type of the probe instance. Valid values:
   * 
   * - windows: Windows.
   * - linux: Linux.
   * 
   * @example
   * windows
   */
  osType?: string;
  /**
   * @remarks
   * The probe ID.
   * 
   * @example
   * 4d167bb3-dd09-4a6a-a179-d5d6a5b0****
   */
  probeId?: string;
  /**
   * @remarks
   * The probe type. Valid values:
   * 
   * - **host_probe**: host probe
   * - **vpc_black_hole_probe**: VPC blackhole probe.
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  /**
   * @remarks
   * The probe version.
   * 
   * @example
   * 18060096
   */
  probeVersion?: string;
  /**
   * @remarks
   * The probe status. Valid values:
   * - **installed**: Installation succeeded.
   * - **install_failed**: Installation failed.
   * - **online**: Normal.
   * - **offline**: Offline.
   * - **unnormal**: Service exception.
   * - **unprobe**: Unauthorized.
   * - **uninstalling**: Uninstalling.
   * - **uninstalled**: Uninstallation succeeded.
   * - **uninstall_failed**: Uninstallation failed.
   * - **not_exist**: Not installed.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the asset instance where the host probe is deployed.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance where the VPC probe is deployed.
   * 
   * @example
   * vpc-5gu8iu68w9b472jbb****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      controlNode: 'ControlNode',
      deployTime: 'DeployTime',
      displayName: 'DisplayName',
      hostIp: 'HostIp',
      osType: 'OsType',
      probeId: 'ProbeId',
      probeType: 'ProbeType',
      probeVersion: 'ProbeVersion',
      status: 'Status',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlNode: ListHoneypotProbeResponseBodyListControlNode,
      deployTime: 'number',
      displayName: 'string',
      hostIp: 'string',
      osType: 'string',
      probeId: 'string',
      probeType: 'string',
      probeVersion: 'string',
      status: 'string',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.controlNode && typeof (this.controlNode as any).validate === 'function') {
      (this.controlNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotProbeResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of honeypot probes displayed on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The current page number returned in the paged query during paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of honeypot probes displayed per page in the paged query during paging. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of honeypot probes returned.
   * 
   * @example
   * 30
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

export class ListHoneypotProbeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code of the response.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of honeypot probe data.
   */
  list?: ListHoneypotProbeResponseBodyList[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListHoneypotProbeResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 4BC9E610-21BE-537F-82EF-144A60D5A970
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListHoneypotProbeResponseBodyList },
      message: 'string',
      pageInfo: ListHoneypotProbeResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
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

