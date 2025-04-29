// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn } from "./ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn";


export class ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is not publicly available.
   */
  arn?: ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn[];
  /**
   * @remarks
   * Specifies whether to enable encryption for cross-region snapshot replication. Valid values:
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
   * The ID of the KMS key used for encryption in cross-region snapshot replication.
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
      arn: { 'type': 'array', 'itemType': ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn },
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

