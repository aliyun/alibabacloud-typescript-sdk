// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOperationTicketResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  operationTicketId?: string;
  /**
   * @example
   * 0ECCC399-4D35-48A7-8379-5C6180E66235
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationTicketId: 'OperationTicketId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTicketId: 'string',
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

