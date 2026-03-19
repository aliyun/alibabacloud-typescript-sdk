// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanBillingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01ex****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The client generates this value. It must be unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * Specifies whether to display the storage class.
   * 
   * @example
   * true
   */
  showStorageType?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      showStorageType: 'ShowStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      showStorageType: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

