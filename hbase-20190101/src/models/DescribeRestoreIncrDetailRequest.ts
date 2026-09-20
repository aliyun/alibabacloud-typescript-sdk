// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreIncrDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster for backup and recovery.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-m5eyf188hw481xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the restoration record. You can call the DescribeRestoreSummary operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020110514xxxx
   */
  restoreRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreRecordId: 'RestoreRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreRecordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

