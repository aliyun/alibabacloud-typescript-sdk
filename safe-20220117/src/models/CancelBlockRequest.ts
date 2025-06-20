// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelBlockRequest extends $dara.Model {
  blockId?: number;
  cancelBLockDesc?: string;
  createEmpId?: string;
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      cancelBLockDesc: 'CancelBLockDesc',
      createEmpId: 'CreateEmpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'number',
      cancelBLockDesc: 'string',
      createEmpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

