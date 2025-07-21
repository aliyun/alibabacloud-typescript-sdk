// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyResponseBodyKeyMetadata extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the CMK.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:key/05754286-3ba2-4fa6-8d41-4323aca6****
   */
  arn?: string;
  /**
   * @remarks
   * Indicates whether automatic key rotation is enabled. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * *   Suspended
   * 
   * For more information, see [Automatic key rotation](https://help.aliyun.com/document_detail/134270.html).
   * 
   * >  Only symmetric CMKs support automatic key rotation.
   * 
   * @example
   * Disabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The time when the CMK was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-20T06:34:21Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that is used to create the CMK.
   * 
   * @example
   * 154035569884****
   */
  creator?: string;
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
   * The time at which the CMK is scheduled for deletion. The time is displayed in UTC.
   * 
   * For more information, see [ScheduleKeyDeletion](https://help.aliyun.com/document_detail/44196.html).
   * 
   * >  This parameter is returned only when the value of the KeyState parameter is PendingDeletion.
   * 
   * @example
   * 2021-05-26T18:22:03Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The description of deletion protection.
   * 
   * @example
   * The CMK is being used by XXX. Deletion protection is set.
   */
  deletionProtectionDescription?: string;
  /**
   * @remarks
   * The description of the CMK.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * 05754286-3ba2-4fa6-8d41-4323aca6****
   */
  keyId?: string;
  /**
   * @remarks
   * The type of the CMK.
   * 
   * @example
   * Aliyun_AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The status of the CMK.
   * 
   * For more information, see [Impact of CMK status on API operations](https://help.aliyun.com/document_detail/44211.html).
   * 
   * @example
   * Enabled
   */
  keyState?: string;
  /**
   * @remarks
   * The usage of the CMK.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The time when the last rotation was performed. The time is displayed in UTC. For a new CMK, the value of this parameter is the time when the initial version of the CMK was generated.
   * 
   * @example
   * 2021-05-20T06:34:21Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the key material expires. The time is displayed in UTC. If this parameter value is empty, the key material does not expire.
   * 
   * @example
   * 2021-07-06T18:22:03Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned only when the value of the AutomaticRotation parameter is Enabled or Suspended.
   * 
   * @example
   * 2021-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The source of the key material for the CMK.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the current primary key version for the symmetric CMK.
   * 
   * @example
   * 515e0b0a-624f-45ab-92b5-54f9b551****
   */
  primaryKeyVersion?: string;
  /**
   * @remarks
   * The protection level of the CMK.
   * 
   * @example
   * HSM
   */
  protectionLevel?: string;
  /**
   * @remarks
   * The interval for automatic key rotation.
   * 
   * Unit: seconds.
   * 
   * For example, if the value is 604800s, automatic key rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned only when the value of the AutomaticRotation parameter is Enabled or Suspended.
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
      deletionProtection: 'DeletionProtection',
      deletionProtectionDescription: 'DeletionProtectionDescription',
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
      deletionProtection: 'string',
      deletionProtectionDescription: 'string',
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

export class DescribeKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the CMK.
   */
  keyMetadata?: DescribeKeyResponseBodyKeyMetadata;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * f1fdfa9d-bd49-418b-942f-8f3e3ec00a4f
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
      keyMetadata: DescribeKeyResponseBodyKeyMetadata,
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

