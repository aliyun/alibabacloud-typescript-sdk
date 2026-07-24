// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  cuLimit?: number;
  cuReserved?: number;
  cuUsed?: number;
  debugMode?: number;
  instanceId?: string;
  jobName?: string;
  owner?: string;
  regionId?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      cuUsed: 'CuUsed',
      debugMode: 'DebugMode',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      owner: 'Owner',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cuLimit: 'number',
      cuReserved: 'number',
      cuUsed: 'number',
      debugMode: 'number',
      instanceId: 'string',
      jobName: 'string',
      owner: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeJobsResponseBody extends $dara.Model {
  code?: number;
  data?: ListComputeJobsResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListComputeJobsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

