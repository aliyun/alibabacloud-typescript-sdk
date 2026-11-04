// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKeyResponseBodyKeyMetadata extends $dara.Model {
  /**
   * @remarks
   * The ARN of the key.
   * 
   * @example
   * acs:kms:cn-qingdao:154035569884****:key/key-hzz62f1cb66fa42qo****
   */
  arn?: string;
  /**
   * @remarks
   * Indicates whether automatic key rotation is enabled. Valid values:
   * 
   * - Enabled: Automatic rotation is in the enabling status.
   * - Disabled: Automatic rotation is disabled.
   * - Suspended: Automatic rotation is paused and will not execute.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The date and time when the key was created (UTC).
   * 
   * @example
   * 2024-03-25T10:00:00Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The creator of the key.
   * 
   * @example
   * 154035569884****
   */
  creator?: string;
  /**
   * @remarks
   * The instance ID of the KMS instance.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The scheduled deletion time of the key. For more information, see [ScheduleKeyDeletion](https://help.aliyun.com/document_detail/601417.html).
   * 
   * This parameter is returned only when KeyState is set to PendingDeletion.
   * 
   * @example
   * 2025-03-25T10:00:00Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the key.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The globally unique identifier of the key.
   * 
   * @example
   * key-hzz62f1cb66fa42qo****
   */
  keyId?: string;
  /**
   * @remarks
   * The specification of the key.
   * 
   * @example
   * Aliyun_AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The status of the key.  
   * For more information, see [Impact of customer master key (CMK) status on API calls](https://help.aliyun.com/document_detail/44211.html).
   * 
   * @example
   * Enabled
   */
  keyState?: string;
  /**
   * @remarks
   * The purpose of the key.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The time of the last rotation (UTC).  
   * If the key is newly created, this value is the generation time of the initial key version.
   * 
   * @example
   * 2023-03-25T10:00:00Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The expiration time of the key material (UTC).  
   * If this value is empty, the key material does not expire.
   * 
   * @example
   * 2025-03-25T10:00:00Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The time of the next key rotation.  
   * 
   * This value is returned only when the AutomaticRotation parameter is set to Enabled or Suspended.
   * 
   * @example
   * 2024-03-25T10:00:00Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The source of the key material.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The identifier of the current primary version of the key.
   * 
   * @example
   * 7ce1d081-06cb-42e6-aab6-5c5de030****
   */
  primaryKeyVersion?: string;
  /**
   * @remarks
   * The protection level of the key.
   * 
   * @example
   * SOFTWARE
   */
  protectionLevel?: string;
  /**
   * @remarks
   * The interval for automatic key rotation. The unit is seconds, and the format is an integer followed by the letter s. For example, a 7-day rotation interval is 604800s.
   * 
   * This value is returned only when the AutomaticRotation parameter is set to Enabled or Suspended.
   * 
   * @example
   * 31536000s
   */
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      creationDate: 'CreationDate',
      creator: 'Creator',
      DKMSInstanceId: 'DKMSInstanceId',
      deleteDate: 'DeleteDate',
      description: 'Description',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      keyState: 'KeyState',
      keyUsage: 'KeyUsage',
      lastRotationDate: 'LastRotationDate',
      materialExpireTime: 'MaterialExpireTime',
      nextRotationDate: 'NextRotationDate',
      origin: 'Origin',
      primaryKeyVersion: 'PrimaryKeyVersion',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      creationDate: 'string',
      creator: 'string',
      DKMSInstanceId: 'string',
      deleteDate: 'string',
      description: 'string',
      keyId: 'string',
      keySpec: 'string',
      keyState: 'string',
      keyUsage: 'string',
      lastRotationDate: 'string',
      materialExpireTime: 'string',
      nextRotationDate: 'string',
      origin: 'string',
      primaryKeyVersion: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the key.
   */
  keyMetadata?: CreateKeyResponseBodyKeyMetadata;
  /**
   * @remarks
   * The ID of the request. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyMetadata: 'KeyMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyMetadata: CreateKeyResponseBodyKeyMetadata,
      requestId: 'string',
    };
  }

  validate() {
    if(this.keyMetadata && typeof (this.keyMetadata as any).validate === 'function') {
      (this.keyMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

