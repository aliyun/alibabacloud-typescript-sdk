// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestorePlanRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  restoreAllTable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  restoreByCopy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-05T05:49:42Z
   */
  restoreToDate?: string;
  /**
   * @example
   * test_ns:test_table/test_ns:test_table2
   */
  tables?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  targetClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreAllTable: 'RestoreAllTable',
      restoreByCopy: 'RestoreByCopy',
      restoreToDate: 'RestoreToDate',
      tables: 'Tables',
      targetClusterId: 'TargetClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreAllTable: 'boolean',
      restoreByCopy: 'boolean',
      restoreToDate: 'string',
      tables: 'string',
      targetClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

