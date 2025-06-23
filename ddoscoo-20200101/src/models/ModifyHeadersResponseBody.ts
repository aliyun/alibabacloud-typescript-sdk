// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHeadersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DC38A1D3-C042-5670-8394-8F6B1FA97B5E
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

