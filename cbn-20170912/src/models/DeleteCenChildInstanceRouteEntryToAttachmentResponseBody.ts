// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCenChildInstanceRouteEntryToAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 250E717B-9823-5FD8-A1C6-5714234FB825
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

