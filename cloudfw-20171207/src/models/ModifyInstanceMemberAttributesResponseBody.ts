// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMemberAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AB74E747-BA5C-492C-87DD-CEA67FCFFFE5
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

