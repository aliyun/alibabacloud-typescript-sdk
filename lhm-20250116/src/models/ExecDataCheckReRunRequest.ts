// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDataCheckReRunRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID returned by the ExecDataCheckSaveTask operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 20001
   */
  batchId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

