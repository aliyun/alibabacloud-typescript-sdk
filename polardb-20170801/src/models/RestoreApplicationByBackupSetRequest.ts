// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreApplicationByBackupSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * polarclaw
   */
  applicationType?: string;
  /**
   * @remarks
   * The ID of the backup set used to restore the application. Usage notes: This parameter is required. If this parameter is not provided, the API returns the InvalidBackupSetID.NotFound (404) error.
   * 
   * @example
   * bs-123456
   */
  backupSetId?: string;
  /**
   * @remarks
   * The ID of the region where the application resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      backupSetId: 'BackupSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      backupSetId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

