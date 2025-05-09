// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: number;
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

