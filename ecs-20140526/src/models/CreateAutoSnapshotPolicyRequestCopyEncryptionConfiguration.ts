// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn } from "./CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn";


export class CreateAutoSnapshotPolicyRequestCopyEncryptionConfiguration extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  arn?: CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn[];
  /**
   * @remarks
   * Specifies whether to enable cross-region snapshot replication and encryption. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used in cross-region snapshot replication and encryption.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  KMSKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: { 'type': 'array', 'itemType': CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn },
      encrypted: 'boolean',
      KMSKeyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

