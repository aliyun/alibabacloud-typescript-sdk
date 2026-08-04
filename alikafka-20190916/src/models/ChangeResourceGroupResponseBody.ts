// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The new resource group ID. You can view available resource groups in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5CA600C-7D5A-45B5-B6DB-44FAC2C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      newResourceGroupId: 'NewResourceGroupId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      newResourceGroupId: 'string',
      requestId: 'string',
      success: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

