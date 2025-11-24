// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReActivateAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the project that is used to store audit logs.
   * 
   * @example
   * k8s-log-c0703599f695f4b8fa1c6492a33af****
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17163CE9-CE4B-1B87-9185-1A1AD7E7****
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

