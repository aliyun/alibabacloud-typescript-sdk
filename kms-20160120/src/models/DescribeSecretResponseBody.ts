// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecretResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * val1
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

export class DescribeSecretResponseBodyTags extends $dara.Model {
  tag?: DescribeSecretResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSecretResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:secret/secret001
   */
  arn?: string;
  /**
   * @remarks
   * Indicates whether automatic rotation is enabled. Valid values:
   * 
   * *   Enabled: indicates that automatic rotation is enabled.
   * *   Disabled: indicates that automatic rotation is disabled.
   * *   Invalid: indicates that the status of automatic rotation is abnormal. In this case, Secrets Manager cannot automatically rotate the secret.
   * 
   * >  This parameter is returned only for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The time when the secret was created.
   * 
   * @example
   * 2022-02-21T15:39:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the dedicated KMS instance.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * userinfo
   */
  description?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) that is used to encrypt the secret value.
   * 
   * @example
   * 00aa68af-2c02-4f68-95fe-3435d330****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The extended configuration of the secret.
   * 
   * >  This parameter is returned only for a managed ApsaraDB RDS secret, a managed Resource Access Management (RAM) secret, or a managed Elastic Compute Service (ECS) secret.
   * 
   * @example
   * {\\"SecretSubType\\":\\"SingleUser\\", \\"DBInstanceId\\":\\"rm-uf667446pc955****\\",  \\"CustomData\\":{} }
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The time when the last rotation was performed.
   * 
   * >  This parameter is returned if the secret was rotated.
   * 
   * @example
   * 2022-07-05T08:22:03Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned when automatic rotation is enabled.
   * 
   * @example
   * 2022-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  owingService?: string;
  /**
   * @remarks
   * The time when the secret is scheduled to be deleted.
   * 
   * @example
   * 2022-03-21T15:45:12Z
   */
  plannedDeleteTime?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 93348dfb-3627-4417-8d90-487a76a909c9
   */
  requestId?: string;
  /**
   * @remarks
   * The interval for automatic rotation.
   * 
   * The value is in the `integer[unit]` format. `integer` indicates the length of time. `unit`: indicates the time unit. The value of `unit` is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned when automatic rotation is enabled.
   * 
   * @example
   * 3153600s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * *   Generic: indicates a generic secret.
   * *   Rds: indicates a managed ApsaraDB RDS secret.
   * *   RAMCredentials: indicates a managed RAM secret.
   * *   ECS: indicates a managed ECS secret.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The resource tags of the secret.
   * 
   * This parameter is not returned if you set the FetchTags parameter to false or you do not specify the FetchTags parameter.
   */
  tags?: DescribeSecretResponseBodyTags;
  /**
   * @remarks
   * The time when the secret was updated.
   * 
   * @example
   * 2022-02-21T15:39:26Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      createTime: 'CreateTime',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfig: 'ExtendedConfig',
      lastRotationDate: 'LastRotationDate',
      nextRotationDate: 'NextRotationDate',
      owingService: 'OwingService',
      plannedDeleteTime: 'PlannedDeleteTime',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      createTime: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      encryptionKeyId: 'string',
      extendedConfig: 'string',
      lastRotationDate: 'string',
      nextRotationDate: 'string',
      owingService: 'string',
      plannedDeleteTime: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: DescribeSecretResponseBodyTags,
      updateTime: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

