// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * *   `true`: The call was successful.
   * *   `false`: The call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 27E653FA-5958-45BE-8AA9-14D884DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
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

