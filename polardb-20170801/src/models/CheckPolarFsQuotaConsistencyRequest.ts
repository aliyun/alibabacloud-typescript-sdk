// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckPolarFsQuotaConsistencyRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  enableRepair?: boolean;
  /**
   * @example
   * false
   */
  enableStrictCalculate?: boolean;
  /**
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
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

