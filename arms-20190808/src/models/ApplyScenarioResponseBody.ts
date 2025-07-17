// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyScenarioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EA24D522-AD35-47B8-8CB2-ADBC38******
   */
  requestId?: string;
  /**
   * @remarks
   * The code of the business monitoring job, which is the coloring sign.
   * 
   * @example
   * 2b97****
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

