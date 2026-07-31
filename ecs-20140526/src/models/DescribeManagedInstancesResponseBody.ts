// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeManagedInstancesResponseBodyInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the managed instance. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with this tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the managed instance. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The activation code ID.
   * 
   * @example
   * 3704F543-F768-43FA-9864-897F75B3****
   */
  activationId?: string;
  /**
   * @remarks
   * The version number of Cloud Assistant Agent.
   * 
   * @example
   * 2.2.0.102
   */
  agentVersion?: string;
  /**
   * @remarks
   * Indicates whether the managed instance is connected.
   * 
   * - true: The managed instance is connected. You can manage the managed instance by using Cloud Assistant.
   * 
   * - false: The managed instance is not connected. The server may be shut down or Cloud Assistant Agent may not be properly installed.
   * 
   * @example
   * true
   */
  connected?: boolean;
  /**
   * @remarks
   * The hostname of the managed instance.
   * 
   * @example
   * demo
   */
  hostname?: string;
  /**
   * @remarks
   * The managed instance ID.
   * 
   * @example
   * mi-hz018jrc1o0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the managed instance.
   * 
   * @example
   * webAPP-linux-01
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the managed instance.
   * 
   * @example
   * ``40.65.**.**``
   */
  internetIp?: string;
  /**
   * @remarks
   * The internal IP address of the managed instance.
   * 
   * @example
   * ``10.0.**.**``
   */
  intranetIp?: string;
  /**
   * @remarks
   * The number of times that Cloud Assistant tasks were run on the managed instance.
   * 
   * @example
   * 1
   */
  invocationCount?: number;
  /**
   * @remarks
   * The time when the last Cloud Assistant task was run.
   * 
   * @example
   * 2021-01-20T09:00:40Z
   */
  lastInvokedTime?: string;
  /**
   * @remarks
   * The machine ID of the managed instance.
   * 
   * @example
   * e03231b37ab14e53b5795ad625fc****
   */
  machineId?: string;
  /**
   * @remarks
   * The operating system of the managed instance.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * Linux_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021_x86_64
   */
  osVersion?: string;
  /**
   * @remarks
   * The registration time of the managed instance.
   * 
   * @example
   * 2021-01-20T08:57:56Z
   */
  registrationTime?: string;
  /**
   * @remarks
   * The ID of the resource group to which the managed instance belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeManagedInstancesResponseBodyInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      activationId: 'ActivationId',
      agentVersion: 'AgentVersion',
      connected: 'Connected',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      invocationCount: 'InvocationCount',
      lastInvokedTime: 'LastInvokedTime',
      machineId: 'MachineId',
      osType: 'OsType',
      osVersion: 'OsVersion',
      registrationTime: 'RegistrationTime',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationId: 'string',
      agentVersion: 'string',
      connected: 'boolean',
      hostname: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      invocationCount: 'number',
      lastInvokedTime: 'string',
      machineId: 'string',
      osType: 'string',
      osVersion: 'string',
      registrationTime: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeManagedInstancesResponseBodyInstancesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of managed instances.
   */
  instances?: DescribeManagedInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the managed instance list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 77115469-F2C5-4ECA-94F7-FA04F2FD****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of managed instances queried.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeManagedInstancesResponseBodyInstances },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

