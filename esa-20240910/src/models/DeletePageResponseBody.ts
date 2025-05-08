// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom error page.[](~~2850223~~)
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

