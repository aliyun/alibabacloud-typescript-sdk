// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteThreadResponseBody extends $dara.Model {
  deleted?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 123-0F43-23423-AC43-34234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
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

