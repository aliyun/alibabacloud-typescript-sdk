// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: number;
  /**
   * @remarks
   * A5B97987-66EA-5563-9599-A2752292XXXX
   * 
   * @example
   * The ID of the file resource.
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

