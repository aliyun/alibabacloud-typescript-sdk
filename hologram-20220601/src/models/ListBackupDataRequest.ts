// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupDataRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. Specific backup data is filtered based on the type. If you leave this parameter empty, all backup data is returned.
   * 
   * Valid values:
   * 
   * *   redundant_remote
   * *   remote
   * *   redundant
   * *   full_remote
   * *   local
   * *   full
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

