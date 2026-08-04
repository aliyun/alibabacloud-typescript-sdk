// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResendAsyncModifyLoginEmailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  traceNo?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      traceNo: 'TraceNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      traceNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

