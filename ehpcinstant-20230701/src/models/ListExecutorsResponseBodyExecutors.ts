// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExecutorsResponseBodyExecutorsResource } from "./ListExecutorsResponseBodyExecutorsResource";
import { ListExecutorsResponseBodyExecutorsTags } from "./ListExecutorsResponseBodyExecutorsTags";


export class ListExecutorsResponseBodyExecutors extends $dara.Model {
  appName?: string;
  /**
   * @example
   * 0
   */
  arrayIndex?: number;
  /**
   * @example
   * 2024-02-20 10:04:10
   */
  createTime?: string;
  /**
   * @example
   * 2024-02-20 10:04:18
   */
  endTime?: string;
  /**
   * @example
   * job-xxxx-task0-1
   */
  executorId?: string;
  expirationTime?: string;
  externalIpAddress?: string[];
  hostName?: string[];
  image?: string;
  ipAddress?: string[];
  /**
   * @example
   * job-hy1nggvyukuvkr******
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  resource?: ListExecutorsResponseBodyExecutorsResource;
  resourceType?: string;
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Succeeded to release executor resource
   */
  statusReason?: string;
  tags?: ListExecutorsResponseBodyExecutorsTags[];
  /**
   * @example
   * task0
   */
  taskName?: string;
  taskSustainable?: boolean;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      arrayIndex: 'ArrayIndex',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorId: 'ExecutorId',
      expirationTime: 'ExpirationTime',
      externalIpAddress: 'ExternalIpAddress',
      hostName: 'HostName',
      image: 'Image',
      ipAddress: 'IpAddress',
      jobId: 'JobId',
      jobName: 'JobName',
      resource: 'Resource',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      taskName: 'TaskName',
      taskSustainable: 'TaskSustainable',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      arrayIndex: 'number',
      createTime: 'string',
      endTime: 'string',
      executorId: 'string',
      expirationTime: 'string',
      externalIpAddress: { 'type': 'array', 'itemType': 'string' },
      hostName: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      jobName: 'string',
      resource: ListExecutorsResponseBodyExecutorsResource,
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutorsTags },
      taskName: 'string',
      taskSustainable: 'boolean',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.externalIpAddress)) {
      $dara.Model.validateArray(this.externalIpAddress);
    }
    if(Array.isArray(this.hostName)) {
      $dara.Model.validateArray(this.hostName);
    }
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

