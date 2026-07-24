// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  cu?: number;
  instanceId?: string;
  instanceName?: string;
  serviceStatus?: string;
  totalJobs?: number;
  totalRunningJobs?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cu: 'Cu',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      serviceStatus: 'ServiceStatus',
      totalJobs: 'TotalJobs',
      totalRunningJobs: 'TotalRunningJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cu: 'number',
      instanceId: 'string',
      instanceName: 'string',
      serviceStatus: 'string',
      totalJobs: 'number',
      totalRunningJobs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeInstancesResponseBody extends $dara.Model {
  code?: number;
  data?: ListComputeInstancesResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListComputeInstancesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

