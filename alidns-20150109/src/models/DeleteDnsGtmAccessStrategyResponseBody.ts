// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDnsGtmAccessStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
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

