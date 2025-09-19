// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssScanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 210****
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DFD6277-CC36-57F7-ACE6-F5952123****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

