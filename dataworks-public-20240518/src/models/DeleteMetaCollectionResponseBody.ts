// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetaCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 45D14A7A-7C28-5547-AB0A-35FBCD9DE7B5
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

