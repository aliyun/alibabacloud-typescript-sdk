// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebalanceHoloWarehouseResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C0EA5844-AB00-5653-8711-CD9FD1798412
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

