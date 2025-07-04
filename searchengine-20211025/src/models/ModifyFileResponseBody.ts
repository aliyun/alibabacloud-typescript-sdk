// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 89B968E6-1E41-58DF-BB25-5F98ECC759CE
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the index
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

