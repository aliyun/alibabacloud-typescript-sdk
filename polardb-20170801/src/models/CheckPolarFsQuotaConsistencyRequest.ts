// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckPolarFsQuotaConsistencyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to repair an inconsistent quota. Valid values:
   * 
   * - false
   * 
   * - true
   * 
   * @example
   * false
   */
  enableRepair?: boolean;
  /**
   * @remarks
   * Specifies whether to calculate the total usage of the directory in strict mode. Valid values:
   * 
   * - false
   * 
   * - true
   * 
   * @example
   * false
   */
  enableStrictCalculate?: boolean;
  /**
   * @remarks
   * The directory path.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The ID of the PolarFS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-test****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableRepair: 'EnableRepair',
      enableStrictCalculate: 'EnableStrictCalculate',
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRepair: 'boolean',
      enableStrictCalculate: 'boolean',
      path: 'string',
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

