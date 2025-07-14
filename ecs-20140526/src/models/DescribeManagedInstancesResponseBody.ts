// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeManagedInstancesResponseBodyInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the managed instance. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If a single tag is specified to query resources, up to 1,000 resources that have this tag added are returned. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added are returned. To query more than 1,000 resources that have the specified tags, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N of the managed instance. Valid values of N: 1 to 20. The tag value can be an empty string.
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
   * The ID of the activation code.
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
   * Indicates whether the managed instance is connected. Valid values:
   * 
   * *   true: The managed instance is connected. You can manage the instance by using Cloud Assistant.
   * *   false: The managed instance is not connected. The managed instance may be down or Cloud Assistant Agent may be incorrectly installed.
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
   * The ID of the managed instance.
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
   * The number of times that Cloud Assistant tasks were executed on the managed instance.
   * 
   * @example
   * 1
   */
  invocationCount?: number;
  /**
   * @remarks
   * The time when the last Cloud Assistant task was executed.
   * 
   * @example
   * 2021-01-20T09:00:40Z
   */
  lastInvokedTime?: string;
  /**
   * @remarks
   * The machine code of the managed instance.
   * 
   * @example
   * e03231b37ab14e53b5795ad625fc****
   */
  machineId?: string;
  /**
   * @remarks
   * The operating system type of the managed instance.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The version information of the operating system.
   * 
   * @example
   * Linux_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021_x86_64
   */
  osVersion?: string;
  /**
   * @remarks
   * The time when the managed instance was registered.
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
   * The tags of the managed instance.
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
   * The queried managed instances.
   */
  instances?: DescribeManagedInstancesResponseBodyInstances[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
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
   * The total number of queried managed instances.
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

