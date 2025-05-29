// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCenChildInstanceRouteEntryToCenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C05000A4-2FC5-5B2C-9527-954044DE2CF3
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

