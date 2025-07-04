// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishIndexVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
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

