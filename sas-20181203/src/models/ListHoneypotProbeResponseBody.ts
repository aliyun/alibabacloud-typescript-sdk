// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotProbeResponseBodyListControlNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * i-uf6eq0rlvu1mkh0p****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 8ec9da17-c0e7-4642-aad6-defc9722****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
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
   * The information about the management node.
   */
  controlNode?: ListHoneypotProbeResponseBodyListControlNode;
  /**
   * @remarks
   * The time when the probe was deployed.
   * 
   * @example
   * 1669363825000
   */
  deployTime?: number;
  /**
   * @remarks
   * The name of the probe.
   * 
   * @example
   * prod-pinpoint-hd1b
   */
  displayName?: string;
  /**
   * @remarks
   * The IP address of the server on which the probe is installed.
   * 
   * @example
   * 33.53.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The operating system of the server on which the probe is deployed. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * windows
   */
  osType?: string;
  /**
   * @remarks
   * The ID of the probe.
   * 
   * @example
   * 4d167bb3-dd09-4a6a-a179-d5d6a5b0****
   */
  probeId?: string;
  /**
   * @remarks
   * The type of the probe. Valid values:
   * 
   * *   **host_probe**: host probe
   * *   **vpc_black_hole_probe**: VPC probe
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  /**
   * @remarks
   * The version of the probe.
   * 
   * @example
   * 18060096
   */
  probeVersion?: string;
  /**
   * @remarks
   * The status of the probe. Valid values:
   * 
   * *   **installed**: installed
   * *   **install_failed**: installation failed
   * *   **online**: online
   * *   **offline**: offline
   * *   **unnormal**: abnormal
   * *   **unprobe**: unauthorized
   * *   **uninstalling**: being uninstalled
   * *   **uninstalled**: uninstalled
   * *   **uninstall_failed**: uninstallation failed
   * *   **not_exist**: not installed
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server to which the host probe is deployed.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the VPC in which the VPC probe is deployed.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
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
   * The status code that is returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * An array that consists of the details about the probe.
   */
  list?: ListHoneypotProbeResponseBodyList[];
  /**
   * @remarks
   * The message returned.
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4BC9E610-21BE-537F-82EF-144A60D5A970
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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

