// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request, which is used for log tracing and troubleshooting.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

