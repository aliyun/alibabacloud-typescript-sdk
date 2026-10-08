// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The task number.
   */
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

