// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 407BFD91-DE7D-50BA-8F88-CDE52A3B5E46
   */
  requestId?: string;
  /**
   * @remarks
   * The list of clusters
   * 
   * @example
   * {}
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

