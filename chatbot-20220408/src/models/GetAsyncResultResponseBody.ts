// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncResultResponseBody extends $dara.Model {
  data?: string;
  /**
   * @example
   * F79E7305-5314-5069-A701-9591AD051902
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

