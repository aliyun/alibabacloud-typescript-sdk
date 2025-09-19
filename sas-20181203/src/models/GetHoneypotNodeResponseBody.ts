// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotNodeResponseBodyHoneypotNode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a honeypot is allowed to access the Internet. Valid values:
   * 
   * *   **true**: The honeypot is allowed to access the Internet.
   * *   **false**: The honeypot is not allowed to access the Internet.
   * 
   * @example
   * true
   */
  allowHoneypotAccessInternet?: boolean;
  /**
   * @remarks
   * The time when the management node was created.
   * 
   * @example
   * 2022-12-02 17:13:43
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2vccskxjunf1ag6w****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The maximum number of honeypots that can be deployed to the management node.
   * 
   * @example
   * 10
   */
  honeypotTotalCount?: number;
  /**
   * @remarks
   * The number of honeypots that are deployed to the management node.
   * 
   * @example
   * 5
   */
  honeypotUsedCount?: number;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * a7409a58-bc60-41af-9d36-080d58ae****
   */
  nodeId?: string;
  /**
   * @remarks
   * The IP address of the management node.
   * 
   * @example
   * 101.37.XX.XX
   */
  nodeIp?: string;
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * gmmc
   */
  nodeName?: string;
  /**
   * @remarks
   * The maximum number of probes that can be deployed for the management node.
   * 
   * @example
   * 20
   */
  probeTotalCount?: number;
  /**
   * @remarks
   * The number of probes that are deployed for the management node.
   * 
   * @example
   * 15
   */
  probeUsedCount?: number;
  /**
   * @remarks
   * An array consisting of the CIDR blocks that are allowed to access the management node.
   */
  securityGroupProbeIpList?: string[];
  /**
   * @remarks
   * The status of the management node. Valid values:
   * 
   * *   **0**: preparing
   * *   **1**: normal
   * *   **2**: abnormal
   * *   **4**: starting
   * *   **5**: upgrading
   * 
   * @example
   * 2
   */
  totalStatus?: number;
  /**
   * @remarks
   * Indicates whether the management node can be upgraded. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  upgradeAvailable?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowHoneypotAccessInternet: 'AllowHoneypotAccessInternet',
      createTime: 'CreateTime',
      ecsInstanceId: 'EcsInstanceId',
      honeypotTotalCount: 'HoneypotTotalCount',
      honeypotUsedCount: 'HoneypotUsedCount',
      nodeId: 'NodeId',
      nodeIp: 'NodeIp',
      nodeName: 'NodeName',
      probeTotalCount: 'ProbeTotalCount',
      probeUsedCount: 'ProbeUsedCount',
      securityGroupProbeIpList: 'SecurityGroupProbeIpList',
      totalStatus: 'TotalStatus',
      upgradeAvailable: 'UpgradeAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowHoneypotAccessInternet: 'boolean',
      createTime: 'string',
      ecsInstanceId: 'string',
      honeypotTotalCount: 'number',
      honeypotUsedCount: 'number',
      nodeId: 'string',
      nodeIp: 'string',
      nodeName: 'string',
      probeTotalCount: 'number',
      probeUsedCount: 'number',
      securityGroupProbeIpList: { 'type': 'array', 'itemType': 'string' },
      totalStatus: 'number',
      upgradeAvailable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupProbeIpList)) {
      $dara.Model.validateArray(this.securityGroupProbeIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the management node.
   */
  honeypotNode?: GetHoneypotNodeResponseBodyHoneypotNode;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0A453658-070B-5554-B46C-867425BE4FD4
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
      honeypotNode: 'HoneypotNode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      honeypotNode: GetHoneypotNodeResponseBodyHoneypotNode,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.honeypotNode && typeof (this.honeypotNode as any).validate === 'function') {
      (this.honeypotNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

