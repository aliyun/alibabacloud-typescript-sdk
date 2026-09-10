// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDataCheckRunRequest extends $dara.Model {
  /**
   * @remarks
   * The check job ID.
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

