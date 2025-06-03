// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RetrieveRunResponseBodyRun } from "./RetrieveRunResponseBodyRun";


export class RetrieveRunResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  run?: RetrieveRunResponseBodyRun;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      run: 'run',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      run: RetrieveRunResponseBodyRun,
    };
  }

  validate() {
    if(this.run && typeof (this.run as any).validate === 'function') {
      (this.run as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

