// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostInfoByDbsInstanceRequest extends $dara.Model {
  /**
   * @example
   * dbsr1l3ro21****
   */
  backupPlanId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      regionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

