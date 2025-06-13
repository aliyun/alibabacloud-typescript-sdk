// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupConfigRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  backupConfig?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * video
   */
  resourceType?: string;
  /**
   * @example
   * videoDetection
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      backupConfig: 'BackupConfig',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupConfig: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

