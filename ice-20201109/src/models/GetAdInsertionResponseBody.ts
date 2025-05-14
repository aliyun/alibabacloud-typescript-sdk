// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAdInsertionResponseBodyConfig } from "./GetAdInsertionResponseBodyConfig";


export class GetAdInsertionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ad insertion configuration.
   */
  config?: GetAdInsertionResponseBodyConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetAdInsertionResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

