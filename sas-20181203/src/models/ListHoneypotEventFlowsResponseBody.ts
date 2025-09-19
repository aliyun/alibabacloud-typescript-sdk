// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotEventFlowsResponseBodyHoneypotEventFlows extends $dara.Model {
  /**
   * @remarks
   * The ID of the probe.
   * 
   * @example
   * d3c0dafa-5059-4eb0-8c28-7d40f58*****
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the probe.
   * 
   * @example
   * hw-d***
   */
  agentName?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * eca09895****
   */
  dockerId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 112.126.205.***
   */
  dstIp?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  dstPort?: number;
  /**
   * @remarks
   * The UUID of the connection in the attack.
   * 
   * @example
   * fd7f1ff4-0c4b-41cb-99ad-0724349d****
   */
  eventConnection?: string;
  /**
   * @remarks
   * The extended information about the attack payload.
   * 
   * @example
   * {\\"payload\\":{\\"format\\":\\"line\\",\\"name\\":{\\"cn\\":\\"payload\\",\\"en\\":\\"payload\\"},\\"value\\":\\"\\"},\\"uid\\":{\\"format\\":\\"line\\",\\"name\\":{\\"cn\\":\\"\\",\\"en\\":\\"\\"},\\"uid\\":\\"5fa2ece9-aa08-4bbd-a272-5d27*********\\",\\"value\\":\\"\\"}}
   */
  extra?: string;
  /**
   * @remarks
   * The extension information about the virtual private cloud (VPC).
   * 
   * @example
   * {\\"vpc_id\\":\\"\\",\\"vpc_dest_port\\":\\"\\",\\"vpc_dest_ip\\":\\"\\"}
   */
  extra1?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the file.
   * 
   * @example
   * https://pop-test-file-upload.oss-cn-beijing.aliyuncs.com/5626_26331*****
   */
  fileOssUrl?: string;
  /**
   * @remarks
   * The timestamp when the intrusion event was first occurred.
   * 
   * @example
   * 1686621122000
   */
  firstTime?: number;
  /**
   * @remarks
   * The ID of the intrusion event. The value is a string.
   * 
   * @example
   * 19bec028-d98b-45c4-a4d9-cc3d593f****
   */
  honeypotEventId?: string;
  /**
   * @remarks
   * The ID of the honeypot.
   * 
   * @example
   * 911df9d6fe20451c059edbcffa1d1c33452f6a71e59d4826da067af224*****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The name of the honeypot.
   * 
   * @example
   * hw-zhi*****
   */
  honeypotName?: string;
  /**
   * @remarks
   * The timestamp when the intrusion event was last occurred.
   * 
   * @example
   * 1686622222000
   */
  lastTime?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **2**: low
   * *   **3**: medium
   * *   **4**: high
   * 
   * @example
   * 4
   */
  riskLevel?: string;
  /**
   * @remarks
   * The ID of the intrusion event.
   * 
   * @example
   * 306527555
   */
  securityEventId?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 121.41.48.***
   */
  srcIp?: string;
  /**
   * @remarks
   * The source media access control (MAC) address.
   * 
   * @example
   * 00:0C:29:CA:**:**
   */
  srcMac?: string;
  /**
   * @remarks
   * The source port number.
   * 
   * @example
   * 80
   */
  srcPort?: number;
  /**
   * @remarks
   * The handling status of the intrusion event. Valid values:
   * 
   * *   **1**: pending handling
   * *   **2**: ignored
   * *   **4**: confirmed
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the attack type.
   * 
   * @example
   * web_access
   */
  typeId?: string;
  /**
   * @remarks
   * The UUID of an attack in the intrusion event.
   * 
   * @example
   * 5fa2ece9-aa08-4bbd-a272-5d27d1c6*****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      dockerId: 'DockerId',
      dstIp: 'DstIp',
      dstPort: 'DstPort',
      eventConnection: 'EventConnection',
      extra: 'Extra',
      extra1: 'Extra1',
      fileOssUrl: 'FileOssUrl',
      firstTime: 'FirstTime',
      honeypotEventId: 'HoneypotEventId',
      honeypotId: 'HoneypotId',
      honeypotName: 'HoneypotName',
      lastTime: 'LastTime',
      riskLevel: 'RiskLevel',
      securityEventId: 'SecurityEventId',
      srcIp: 'SrcIp',
      srcMac: 'SrcMac',
      srcPort: 'SrcPort',
      status: 'Status',
      typeId: 'TypeId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      dockerId: 'string',
      dstIp: 'string',
      dstPort: 'number',
      eventConnection: 'string',
      extra: 'string',
      extra1: 'string',
      fileOssUrl: 'string',
      firstTime: 'number',
      honeypotEventId: 'string',
      honeypotId: 'string',
      honeypotName: 'string',
      lastTime: 'number',
      riskLevel: 'string',
      securityEventId: 'number',
      srcIp: 'string',
      srcMac: 'string',
      srcPort: 'number',
      status: 'number',
      typeId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotEventFlowsResponseBodyPageInfo extends $dara.Model {
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 78
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

export class ListHoneypotEventFlowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The attack timelines.
   */
  honeypotEventFlows?: ListHoneypotEventFlowsResponseBodyHoneypotEventFlows[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListHoneypotEventFlowsResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F4E6157-9600-5588-86B9-38F09067****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      honeypotEventFlows: 'HoneypotEventFlows',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      honeypotEventFlows: { 'type': 'array', 'itemType': ListHoneypotEventFlowsResponseBodyHoneypotEventFlows },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: ListHoneypotEventFlowsResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.honeypotEventFlows)) {
      $dara.Model.validateArray(this.honeypotEventFlows);
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

