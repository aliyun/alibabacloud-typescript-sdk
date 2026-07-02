// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateKeyResponseBodyKeyMetadata extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the key.
   * 
   * @example
   * acs:kms:cn-qingdao:154035569884****:key/key-hzz62f1cb66fa42qo****
   */
  arn?: string;
  /**
   * @remarks
   * Indicates whether automatic key rotation is enabled. Valid values:
   * 
   * - Enabled: Automatic rotation is enabled.
   * 
   * - Disabled: Automatic rotation is disabled.
   * 
   * - Suspended: Automatic rotation is suspended.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The date and time when the key was created. The time is in UTC.
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
   * The ID of the KMS instance.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The scheduled time to delete the key. For more information, see [ScheduleKeyDeletion](https://help.aliyun.com/document_detail/601417.html) .
   * 
   * This parameter is returned only when the value of KeyState is PendingDeletion.
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
   * The globally unique identifier (GUID) of the key.
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
   * The status of the key.<br> For more information, see [Impact of CMK status on API calls](https://help.aliyun.com/document_detail/44211.html).<br>
   * 
   * @example
   * Enabled
   */
  keyState?: string;
  /**
   * @remarks
   * The usage of the key.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The time when the last rotation was performed. The time is in UTC.<br> If the key is new, this value is the generation time of the initial key version.<br>
   * 
   * @example
   * 2023-03-25T10:00:00Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The expiration time of the key material. The time is in UTC.<br> If this value is empty, the key material does not expire.<br>
   * 
   * @example
   * 2025-03-25T10:00:00Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The time when the next rotation is scheduled.
   * 
   * This parameter is returned only when the value of AutomaticRotation is Enabled or Suspended.
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
   * The ID of the current primary version of the key.
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
   * The automatic rotation period of the key. The value is in seconds. The value is an integer followed by the character s. For example, a rotation period of 7 days is 604800s.
   * 
   * This parameter is returned only when the value of AutomaticRotation is Enabled or Suspended.
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
   * The ID of the request. This ID is a globally unique identifier (GUID) generated by Alibaba Cloud for the request. Use this ID to troubleshoot issues.
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

