// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers extends $dara.Model {
  name?: string;
  record?: string;
  ttl?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      record: 'Record',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      record: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes extends $dara.Model {
  answers?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers[];
  nodeIp?: string;
  spName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      nodeIp: 'NodeIp',
      spName: 'SpName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers },
      nodeIp: 'string',
      spName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answers)) {
      $dara.Model.validateArray(this.answers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResults extends $dara.Model {
  dnsNodes?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes[];
  province?: string;
  static names(): { [key: string]: string } {
    return {
      dnsNodes: 'DnsNodes',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsNodes: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes },
      province: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsNodes)) {
      $dara.Model.validateArray(this.dnsNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponseBody extends $dara.Model {
  createTime?: string;
  createTimestamp?: number;
  domainName?: string;
  flushCacheResults?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResults[];
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
      flushCacheResults: 'FlushCacheResults',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
      flushCacheResults: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResults },
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flushCacheResults)) {
      $dara.Model.validateArray(this.flushCacheResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

