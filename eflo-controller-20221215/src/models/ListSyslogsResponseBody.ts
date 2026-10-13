// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyslogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i119583961673208491760
   */
  clusterId?: string;
  /**
   * @remarks
   * The security domain of the client.
   * 
   * @example
   * ALIYUN_PUBLIC
   */
  domain?: string;
  /**
   * @remarks
   * The Linux syslog standard field.
   * 
   * @example
   * kern
   */
  facility?: string;
  /**
   * @remarks
   * The hostname of the client.
   * 
   * @example
   * damo-m53kr8kd-0008
   */
  hostname?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 114.55.254.44
   */
  ip?: string;
  /**
   * @remarks
   * The syslog content.
   * 
   * @example
   * bond4: failed to get link speed/duplex for eth8
   */
  msg?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-9lb36u4s601
   */
  nodeId?: string;
  /**
   * @remarks
   * The Linux syslog standard field.
   * 
   * @example
   * warning
   */
  severity?: string;
  /**
   * @remarks
   * The unique identifier of the machine.
   * 
   * @example
   * 21A401332
   */
  sn?: string;
  /**
   * @remarks
   * The hostname of the syslog server.
   * 
   * @example
   * damo-m53kr8kd-0008
   */
  source?: string;
  /**
   * @remarks
   * The Linux syslog standard field.
   * 
   * @example
   * kernel
   */
  syslogtag?: string;
  /**
   * @remarks
   * The tag for the hostname.
   * 
   * @example
   * damo-m53kr8kd-0008
   */
  tagHostname?: string;
  /**
   * @remarks
   * The tag for the pack ID.
   * 
   * @example
   * D990314D3C25D7E8-1080
   */
  tagPackId?: string;
  /**
   * @remarks
   * The tag for the path.
   * 
   * @example
   * /var/log/kern
   */
  tagPath?: string;
  /**
   * @remarks
   * The tag for the receive time. Specify a UNIX timestamp in seconds.
   * 
   * @example
   * 1687363348
   */
  tagReceiveTime?: string;
  /**
   * @remarks
   * The tag for the user-defined ID.
   * 
   * @example
   * application_b
   */
  tagUserDefinedId?: string;
  /**
   * @remarks
   * The time in UNIX timestamp format.
   * 
   * @example
   * 1687363346
   */
  time?: string;
  /**
   * @remarks
   * The topic, which is logserver or log2sls. Both are syslog servers. logserver collects logs over TCP, and log2sls collects logs over UDP.
   * 
   * @example
   * logserver
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      domain: 'Domain',
      facility: 'Facility',
      hostname: 'Hostname',
      ip: 'Ip',
      msg: 'Msg',
      nodeId: 'NodeId',
      severity: 'Severity',
      sn: 'Sn',
      source: 'Source',
      syslogtag: 'Syslogtag',
      tagHostname: 'TagHostname',
      tagPackId: 'TagPackId',
      tagPath: 'TagPath',
      tagReceiveTime: 'TagReceiveTime',
      tagUserDefinedId: 'TagUserDefinedId',
      time: 'Time',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      domain: 'string',
      facility: 'string',
      hostname: 'string',
      ip: 'string',
      msg: 'string',
      nodeId: 'string',
      severity: 'string',
      sn: 'string',
      source: 'string',
      syslogtag: 'string',
      tagHostname: 'string',
      tagPackId: 'string',
      tagPath: 'string',
      tagReceiveTime: 'string',
      tagUserDefinedId: 'string',
      time: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSyslogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated list of log objects.
   */
  logs?: ListSyslogsResponseBodyLogs[];
  /**
   * @remarks
   * The NextToken for the next page. Include this value in the request to retrieve the next page of results.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListSyslogsResponseBodyLogs },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

