// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdpDepartmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created department.
   * 
   * @example
   * 726
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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

