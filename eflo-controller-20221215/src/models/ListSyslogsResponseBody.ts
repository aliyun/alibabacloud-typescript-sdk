// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyslogsResponseBodyLogs extends $dara.Model {
  /**
   * @example
   * i119583961673208491760
   */
  clusterId?: string;
  /**
   * @example
   * ALIYUN_PUBLIC
   */
  domain?: string;
  /**
   * @example
   * kern
   */
  facility?: string;
  /**
   * @example
   * damo-m53kr8kd-0008
   */
  hostname?: string;
  /**
   * @example
   * 114.55.254.44
   */
  ip?: string;
  /**
   * @example
   * bond4: failed to get link speed/duplex for eth8
   */
  msg?: string;
  /**
   * @example
   * e01-cn-9lb36u4s601
   */
  nodeId?: string;
  /**
   * @example
   * warning
   */
  severity?: string;
  /**
   * @example
   * 21A401332
   */
  sn?: string;
  /**
   * @example
   * damo-m53kr8kd-0008
   */
  source?: string;
  /**
   * @example
   * kernel
   */
  syslogtag?: string;
  /**
   * @example
   * damo-m53kr8kd-0008
   */
  tagHostname?: string;
  /**
   * @example
   * D990314D3C25D7E8-1080
   */
  tagPackId?: string;
  /**
   * @example
   * /var/log/kern
   */
  tagPath?: string;
  /**
   * @example
   * 1687363348
   */
  tagReceiveTime?: string;
  /**
   * @example
   * application_b
   */
  tagUserDefinedId?: string;
  /**
   * @example
   * 1687363346
   */
  time?: string;
  /**
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
  logs?: ListSyslogsResponseBodyLogs[];
  /**
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

