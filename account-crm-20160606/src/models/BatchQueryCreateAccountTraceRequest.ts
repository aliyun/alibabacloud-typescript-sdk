// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryCreateAccountTraceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  traceNoList?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      traceNoList: 'TraceNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      traceNoList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

