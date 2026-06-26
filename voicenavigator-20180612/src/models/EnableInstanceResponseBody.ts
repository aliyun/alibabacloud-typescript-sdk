// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3a530dc0-7cfa-48f6-9539-bf9001e77b16
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

