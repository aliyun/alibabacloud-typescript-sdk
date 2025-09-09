// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShardTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Task creation result
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F8997D95-94AD-416A-AE70-E24D08******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

