// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesResourceTags extends $dara.Model {
  /**
   * @example
   * age
   */
  key?: string;
  /**
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
   * @example
   * 1578469042851
   */
  creationTime?: number;
  /**
   * @example
   * 34234
   */
  creatorId?: number;
  /**
   * @example
   * xxx
   */
  creatorName?: string;
  instanceDescription?: string;
  /**
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  instanceId?: string;
  instanceName?: string;
  isPreset?: boolean;
  /**
   * @example
   * 10
   */
  maxConcurrentConversation?: number;
  /**
   * @example
   * xxx
   */
  ownerName?: string;
  /**
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  resourceGroupId?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @example
   * Success
   */
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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

