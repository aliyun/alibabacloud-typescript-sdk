// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of deletion protection.
   * 
   * > This parameter is available only when EnableDeletionProtection is set to true.
   * 
   * @example
   * The CMK is being used by XXX. Deletion protection is set.
   */
  deletionProtectionDescription?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * - true: enables deletion protection.
   * 
   * - false: disables deletion protection. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableDeletionProtection?: boolean;
  /**
   * @remarks
   * The ID of the key.
   * 
   * @example
   * key-hzz65f3a68554s6ms****
   */
  keyId?: string;
  kmsInstanceId?: string;
  /**
   * @remarks
   * The ARN of the CMK for which you want to configure deletion protection.<br>
   * You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the ARN of the CMK.<br><br>
   * 
   * @example
   * acs:kms:cn-hangzhou:123213123****:key/0225f411-b21d-46d1-be5b-93931c82****
   */
  protectedResourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtectionDescription: 'DeletionProtectionDescription',
      enableDeletionProtection: 'EnableDeletionProtection',
      keyId: 'KeyId',
      kmsInstanceId: 'KmsInstanceId',
      protectedResourceArn: 'ProtectedResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtectionDescription: 'string',
      enableDeletionProtection: 'boolean',
      keyId: 'string',
      kmsInstanceId: 'string',
      protectedResourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

