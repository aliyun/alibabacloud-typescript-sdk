// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupDataRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. Filters specific backup data by type. If this parameter is left empty, all backup data is returned.
   * 
   * @example
   * redundant
   */
  backupType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgprecn-cn-wwoxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'backupType',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

