// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactGroupResponseBody extends $dara.Model {
  /**
   * @example
   * test
   */
  contactGroupId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'contactGroupId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'string',
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

