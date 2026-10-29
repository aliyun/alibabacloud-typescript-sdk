// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteRequestSGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data information, including fields such as tags, score, and extend.
   * 
   * @example
   * {"score": 80.4, "tags": "ra0601,rnk0002,rn0312"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The result message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F41DC6-2070-5CE7-8B2D-7A23D882932D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

