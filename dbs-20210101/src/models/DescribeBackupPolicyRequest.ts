// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB for MySQL cluster.
   * 
   * @example
   * pc-2ze3nrr64c5******
   */
  instanceName?: string;
  /**
   * @remarks
   * The region in which the backup set resides.
   * 
   * @example
   * cn-beijing
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
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

