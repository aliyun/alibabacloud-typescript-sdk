// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks extends $dara.Model {
  createTime?: string;
  createTimestamp?: number;
  domainName?: string;
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

