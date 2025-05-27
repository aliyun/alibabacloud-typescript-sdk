// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteTargetsResponseBodyData } from "./DeleteTargetsResponseBodyData";


export class DeleteTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The code 200 indicates that the request was successful. Other codes indicate that the request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteTargetsResponseBodyData;
  /**
   * @remarks
   * The returned error message.
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
   * 78FA9EAC-F0C0-58B0-871E-9F9756CE1D29
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
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
      data: DeleteTargetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

