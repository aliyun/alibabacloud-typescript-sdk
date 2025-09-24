// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostUnitResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether resources are allocated to the specified cost center. Valid values:
   * 
   * *   true: The resources are allocated to the specified cost center.
   * *   false: The resources fail to be allocated to the specified cost center.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the destination cost center.
   * 
   * @example
   * 32857346527
   */
  toUnitId?: number;
  /**
   * @remarks
   * The user ID of the owner of the destination cost center.
   * 
   * @example
   * 34857693874
   */
  toUnitUserId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      toUnitId: 'ToUnitId',
      toUnitUserId: 'ToUnitUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      toUnitId: 'number',
      toUnitUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: AllocateCostUnitResourceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
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
   * 845C629F-47A7-4F46-A470-ED5047C4C250
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
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
      data: AllocateCostUnitResourceResponseBodyData,
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

