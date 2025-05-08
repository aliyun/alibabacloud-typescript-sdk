// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the newly created origin address pool.
   * 
   * @example
   * 103852052519****
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
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

