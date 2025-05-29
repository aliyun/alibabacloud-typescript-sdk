// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableCenVbrHealthCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A278B8A6-A5B8-4FDE-9F70-95F0F6A1D68A
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

