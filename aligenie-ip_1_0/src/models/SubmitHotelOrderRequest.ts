// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHotelOrderRequestPayloadItemList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 152860
   */
  itemId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  quantity?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      quantity: 'Quantity',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      quantity: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  itemList?: SubmitHotelOrderRequestPayloadItemList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': SubmitHotelOrderRequestPayloadItemList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: SubmitHotelOrderRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: SubmitHotelOrderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: SubmitHotelOrderRequestPayload,
      userInfo: SubmitHotelOrderRequestUserInfo,
    };
  }

  validate() {
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

