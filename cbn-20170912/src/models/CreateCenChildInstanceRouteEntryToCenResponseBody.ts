// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenChildInstanceRouteEntryToCenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 437ED236-BE47-5370-8695-15C58C7A8014
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

