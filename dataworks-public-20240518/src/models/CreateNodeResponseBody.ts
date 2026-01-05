// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the Data Studio node.
   * 
   * >  Prior to SDK version 8.0.0, this field is of type Long. In SDK version 8.0.0 and later, it is of type String. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
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
      id: 'string',
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

