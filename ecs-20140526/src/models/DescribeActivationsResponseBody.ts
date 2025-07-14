// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActivationsResponseBodyActivationListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the activation code.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the activation code.
   * 
   * @example
   * zhangsan
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

export class DescribeActivationsResponseBodyActivationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F1234****
   */
  activationId?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 2021-01-20T06:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The number of instances that were deregistered.
   * 
   * @example
   * 1
   */
  deregisteredCount?: number;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the activation code is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The maximum number of times that the activation code can be used to register managed instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The default instance name prefix.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP addresses of hosts that are allowed to use the activation code.
   * 
   * @example
   * 0.0.0.0/0
   */
  ipAddressRange?: string;
  /**
   * @remarks
   * The number of instances that were registered.
   * 
   * @example
   * 1
   */
  registeredCount?: number;
  /**
   * @remarks
   * The ID of the resource group to which the activation code belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the activation code.
   */
  tags?: DescribeActivationsResponseBodyActivationListTags[];
  /**
   * @remarks
   * The validity period of the activation code. Unit: hours.
   * 
   * @example
   * 4
   */
  timeToLiveInHours?: number;
  static names(): { [key: string]: string } {
    return {
      activationId: 'ActivationId',
      creationTime: 'CreationTime',
      deregisteredCount: 'DeregisteredCount',
      description: 'Description',
      disabled: 'Disabled',
      instanceCount: 'InstanceCount',
      instanceName: 'InstanceName',
      ipAddressRange: 'IpAddressRange',
      registeredCount: 'RegisteredCount',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      timeToLiveInHours: 'TimeToLiveInHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationId: 'string',
      creationTime: 'string',
      deregisteredCount: 'number',
      description: 'string',
      disabled: 'boolean',
      instanceCount: 'number',
      instanceName: 'string',
      ipAddressRange: 'string',
      registeredCount: 'number',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeActivationsResponseBodyActivationListTags },
      timeToLiveInHours: 'number',
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

export class DescribeActivationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The activation codes and their usage information.
   */
  activationList?: DescribeActivationsResponseBodyActivationList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
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
   * 4ECEEE12-56F1-4FBC-9AB1-890F74625134
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activationList: 'ActivationList',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationList: { 'type': 'array', 'itemType': DescribeActivationsResponseBodyActivationList },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.activationList)) {
      $dara.Model.validateArray(this.activationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

