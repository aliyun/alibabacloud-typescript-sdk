// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

