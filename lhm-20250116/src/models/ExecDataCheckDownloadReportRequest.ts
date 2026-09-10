// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDataCheckDownloadReportRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. Prerequisite: the report status must be 2 (Generated).
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

