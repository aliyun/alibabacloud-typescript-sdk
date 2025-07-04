// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySearcherReplicaResponseBody extends $dara.Model {
  /**
   * @example
   * e1eef569-1ff7-4bf8-acf7-1cecca9894ce
   */
  requestId?: string;
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

