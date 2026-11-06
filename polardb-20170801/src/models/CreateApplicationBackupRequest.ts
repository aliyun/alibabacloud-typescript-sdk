// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to back up.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type, such as polarclaw.
   * 
   * @example
   * polarclaw
   */
  applicationType?: string;
  /**
   * @remarks
   * The backup mode. Automated indicates an automatic backup, and Manual indicates a manual backup.
   * 
   * This parameter is required.
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  /**
   * @remarks
   * The ID of the region where the application resides. The server uses the actual region of the application.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      jobMode: 'JobMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      jobMode: 'string',
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

