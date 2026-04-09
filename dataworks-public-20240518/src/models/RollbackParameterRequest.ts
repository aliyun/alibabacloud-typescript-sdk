// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackParameterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  rollbackVersion?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      rollbackVersion: 'RollbackVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      rollbackVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

