// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindESUserAnalyzerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3AD34CAD-9603-5251-AFF5-3916C848A1D3
   */
  requestId?: string;
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * []
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

