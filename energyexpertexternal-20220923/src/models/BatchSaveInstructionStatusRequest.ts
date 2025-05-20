// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSaveInstructionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ***
   */
  factoryId?: string;
  /**
   * @example
   * ib
   */
  pKey?: string;
  statusList?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      pKey: 'pKey',
      statusList: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      pKey: 'string',
      statusList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

