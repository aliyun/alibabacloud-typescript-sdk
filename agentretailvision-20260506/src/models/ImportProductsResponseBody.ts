// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportProductsResponseBodyData extends $dara.Model {
  /**
   * @example
   * ITEM_001
   */
  itemUniqueId?: string;
  /**
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

export class ImportProductsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ImportProductsResponseBodyData;
  /**
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
      data: ImportProductsResponseBodyData,
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

