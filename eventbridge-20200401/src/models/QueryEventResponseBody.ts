// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * 200: The request was successful.
   * 
   * Other values indicate that the request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The content of the event.
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * EventBusNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 580A938B-6107-586C-8EC7-F22EEBEDA9E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
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

