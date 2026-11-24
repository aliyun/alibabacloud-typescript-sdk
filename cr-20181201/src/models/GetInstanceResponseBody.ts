// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyTags extends $dara.Model {
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

export class GetInstanceResponseBody extends $dara.Model {
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
   * The creation time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance issue.
   * 
   * @example
   * The instance issue. Valid values:
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
   * shanghai-instance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance specification. Valid values:
   * Enterprise_Basic: basic instance.
   * Enterprise_Standard: standard instance.
   * Enterprise_Advanced: advanced instance.
   * 
   * @example
   * Enterprise_Basic
   */
  instanceSpecification?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - `PENDING`: Initializing.
   * 
   * - `INIT_ERROR`: Initialization failed.
   * 
   * - `STARTING`: Starting.
   * 
   * - `RUNNING`: Running.
   * 
   * - `STOPPING`: Stopping.
   * 
   * - `STOPPED`: Stopped.
   * 
   * - `DELETING`: Deleting.
   * 
   * - `DELETED`: Deleted.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The modification time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1571926560000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF34B18-4228-470C-860C-D28597CF010E
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmv36i4isx****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag collection of the instance.
   */
  tags?: GetInstanceResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceIssue: 'InstanceIssue',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      instanceIssue: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyTags },
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

