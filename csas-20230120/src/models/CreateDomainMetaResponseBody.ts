// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the newly created list.
   * 
   * @example
   * ladl-6f1exxxxx6ab59
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C37AE32-A5C0-5E0F-9EC3-399B83102ED1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

