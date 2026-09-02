// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAgentDataSemanticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the operation.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The update result. If the save is successful, an empty object is returned with no additional business fields. If none of the four knowledge categories are specified, the target state is all four categories empty: if a non-empty current version exists, an all-empty version is published. If the current version is already all empty or no current version exists, the operation succeeds idempotently and the current round of pending generation results is finalized.
   * 
   * @example
   * {}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The response message. If the call fails, an error message is returned.
   * 
   * @example
   * Invalid data semantics request.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * 5DAF96FB-A4DF-548C-B8A1-F2A8D2F4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

