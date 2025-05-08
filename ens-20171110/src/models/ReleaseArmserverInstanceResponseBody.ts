// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseARMServerInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DCAE84DF-4187-5CC5-B819-37BCD2B83BD3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

