// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of deletion protection.
   * 
   * >  This parameter takes effect only when you set the EnableDeletionProtection parameter to true.
   * 
   * @example
   * This key is being used by XXX service. You are protected from deletion.
   */
  deletionProtectionDescription?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   true: enables deletion protection.
   * *   false: disables deletion protection.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableDeletionProtection?: boolean;
  keyId?: string;
  /**
   * @remarks
   * The ARN of the CMK for which you want to set deletion protection.
   * 
   * You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the CMK ARN.
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
      protectedResourceArn: 'ProtectedResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtectionDescription: 'string',
      enableDeletionProtection: 'boolean',
      keyId: 'string',
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

