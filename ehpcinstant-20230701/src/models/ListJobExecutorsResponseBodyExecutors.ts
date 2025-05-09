// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobExecutorsResponseBodyExecutorsTags } from "./ListJobExecutorsResponseBodyExecutorsTags";


export class ListJobExecutorsResponseBodyExecutors extends $dara.Model {
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
  executorId?: string;
  expirationTime?: string;
  externalIpAddress?: string[];
  hostName?: string[];
  ipAddress?: string[];
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Creating executor
   */
  statusReason?: string;
  tags?: ListJobExecutorsResponseBodyExecutorsTags[];
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorId: 'ExecutorId',
      expirationTime: 'ExpirationTime',
      externalIpAddress: 'ExternalIpAddress',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      createTime: 'string',
      endTime: 'string',
      executorId: 'string',
      expirationTime: 'string',
      externalIpAddress: { 'type': 'array', 'itemType': 'string' },
      hostName: { 'type': 'array', 'itemType': 'string' },
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExecutorsTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

