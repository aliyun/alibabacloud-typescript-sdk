// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

