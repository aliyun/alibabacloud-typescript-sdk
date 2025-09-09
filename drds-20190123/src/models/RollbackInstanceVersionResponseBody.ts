// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackInstanceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance version was rolled back.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

