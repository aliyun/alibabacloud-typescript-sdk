// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeployGraphResponseBodyResult } from "./GetDeployGraphResponseBodyResult";


export class GetDeployGraphResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   * 
   * @example
   * {}
   */
  result?: GetDeployGraphResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDeployGraphResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

