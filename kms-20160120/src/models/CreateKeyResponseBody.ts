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
   * The status of automatic key rotation. Valid values:
   * 
   * - Enabled
   * - Disabled
   * - Suspended
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The date and time (UTC) when the key was created.
   * 
   * @example
   * 2023-03-25T10:00:00Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The user who created the key.
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
   * The time when the key is scheduled for deletion. For more information, see ScheduleKeyDeletion.
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
   * The globally unique ID of the key.
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
   * 
   * For more information, see [Impacts of key status on API operations](https://help.aliyun.com/document_detail/44211.html).
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
   * The time when the last rotation was performed. The time is displayed in UTC.
   * 
   * For a new key, this parameter value is the time when the initial version of the key was generated.
   * 
   * @example
   * 2023-03-25T10:00:00Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the key material expires. The time is displayed in UTC.
   * 
   * If this parameter value is empty, the key material does not expire.
   * 
   * @example
   * 2025-03-25T10:00:00Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The time when the key is next rotated.
   * 
   * This value is returned only when the value of AutomaticRotation is Enabled or Suspended.
   * 
   * @example
   * 2024-03-25T10:00:00Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The key material origin.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The current primary version identifier of the key.
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
   * The interval for automatic key rotation. Unit: seconds. The format is an integer value followed by the character s. For example, if the rotation period is seven days, this parameter is set to 604800s.
   * 
   * This value is returned only when the value of AutomaticRotation is Enabled or Suspended.
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
   * The ID of the request, which is used to locate and troubleshoot issues.
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

