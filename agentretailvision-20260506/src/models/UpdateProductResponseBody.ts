// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business-side item ID, which is unique within the same business party.
   * 
   * @example
   * ITEM_001
   */
  itemUniqueId?: string;
  /**
   * @remarks
   * The platform item ID, which is globally unique.
   * 
   * @example
   * PLAT_001
   */
  platformItemId?: string;
  static names(): { [key: string]: string } {
    return {
      itemUniqueId: 'ItemUniqueId',
      platformItemId: 'PlatformItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemUniqueId: 'string',
      platformItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The item information.
   */
  data?: UpdateProductResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
   * 
   * @example
   * True
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
      data: UpdateProductResponseBodyData,
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

