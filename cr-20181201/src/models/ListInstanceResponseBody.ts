// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
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

export class ListInstanceResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The creation time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1562849679000
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-sgedpenzw80e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance issue.
   * 
   * @example
   * Instance issue. Valid values:
   * OSS_TOO_MANY_BUCKETS: The number of OSS buckets exceeds the limit.
   * 
   * OSS_BUCKET_ALREADY_EXISTS: An OSS bucket with the same name already exists.
   * 
   * OSS_SERVICE_ROLE_UNAUTHORIZED: OSS permissions are not authorized.
   * 
   * USER_NOT_REGISTERED_BY_REAL_NAME: The China site account has not completed real-name verification when purchasing an OSS bucket on the China site
   */
  instanceIssue?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The Enterprise Edition specification.
   * 
   * @example
   * Enterprise_Basic
   */
  instanceSpecification?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The last modification time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1562849760000
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2h3aexpy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The collection of instance tags.
   */
  tags?: ListInstanceResponseBodyInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceIssue: 'InstanceIssue',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      instanceIssue: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstancesTags },
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

export class ListInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The instance information.
   */
  instances?: ListInstanceResponseBodyInstances[];
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2A9BA68-B264-4953-9154-CE61B1C03BA6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 12121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instances: 'Instances',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstances },
      isSuccess: 'boolean',
      pageNo: 'number',
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

