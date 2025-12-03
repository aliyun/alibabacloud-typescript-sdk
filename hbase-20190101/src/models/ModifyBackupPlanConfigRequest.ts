// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPlanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  fullBackupCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  minHFileBackupCount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *
   */
  tables?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      fullBackupCycle: 'FullBackupCycle',
      minHFileBackupCount: 'MinHFileBackupCount',
      nextFullBackupDate: 'NextFullBackupDate',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      fullBackupCycle: 'string',
      minHFileBackupCount: 'string',
      nextFullBackupDate: 'string',
      tables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

