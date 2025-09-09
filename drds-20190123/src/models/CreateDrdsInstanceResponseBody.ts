// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList extends $dara.Model {
  drdsInstanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceIdList: 'drdsInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.drdsInstanceIdList)) {
      $dara.Model.validateArray(this.drdsInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the instance.
   */
  drdsInstanceIdList?: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList;
  /**
   * @remarks
   * Indicates the ID of the order.
   * 
   * @example
   * 111111111111111
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceIdList: 'DrdsInstanceIdList',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceIdList: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList,
      orderId: 'number',
    };
  }

  validate() {
    if(this.drdsInstanceIdList && typeof (this.drdsInstanceIdList as any).validate === 'function') {
      (this.drdsInstanceIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the details of the result.
   */
  data?: CreateDrdsInstanceResponseBodyData;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * D99D4644-A70D-49A3-B8B4-767ACC50SE2R
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: CreateDrdsInstanceResponseBodyData,
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

