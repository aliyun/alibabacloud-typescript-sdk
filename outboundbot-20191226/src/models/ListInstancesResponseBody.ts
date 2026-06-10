// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesResourceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * age
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 20
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1578469042851
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the user who created the instance.
   * 
   * @example
   * 34234
   */
  creatorId?: number;
  /**
   * @remarks
   * The name of the user who created the instance.
   * 
   * @example
   * xxx
   */
  creatorName?: string;
  /**
   * @remarks
   * The description of the Outbound Calling Bot service instance.
   * 
   * @example
   * 这是一个实例
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Outbound Calling Bot service instance.
   * 
   * @example
   * 回访
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the instance is a system-predefined instance.
   * 
   * @example
   * false
   */
  isPreset?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent outbound calls.
   * 
   * @example
   * 10
   */
  maxConcurrentConversation?: number;
  /**
   * @remarks
   * The name of the Alibaba Cloud account.
   * 
   * @example
   * xxx
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * []
   */
  resourceTags?: ListInstancesResponseBodyInstancesResourceTags[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isPreset: 'IsPreset',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      ownerName: 'OwnerName',
      resourceGroupId: 'ResourceGroupId',
      resourceTags: 'ResourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      creatorId: 'number',
      creatorName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isPreset: 'boolean',
      maxConcurrentConversation: 'number',
      ownerName: 'string',
      resourceGroupId: 'string',
      resourceTags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesResourceTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * A list of service instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
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
   * The ID of the request.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instances: 'Instances',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
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

