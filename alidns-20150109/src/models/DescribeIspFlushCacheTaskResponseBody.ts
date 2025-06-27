// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIspFlushCacheTaskResponseBodyFlushCacheResults } from "./DescribeIspFlushCacheTaskResponseBodyFlushCacheResults";


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

