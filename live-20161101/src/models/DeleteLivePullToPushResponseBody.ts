// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLivePullToPushResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68*****
   */
  requestId?: string;
  /**
   * @remarks
   * The code that is returned for the request.
   * 
   * > 
   * 
   * *   0 is returned if the request is normal.
   * 
   * *   For information about codes that are returned when exceptions occur, see the following Error codes table.
   * 
   * @example
   * 0
   */
  retCode?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

