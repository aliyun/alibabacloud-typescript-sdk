// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostUnitResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call is complete.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 12431
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 123412343
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteCostUnitResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: DeleteCostUnitResponseBodyData,
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

