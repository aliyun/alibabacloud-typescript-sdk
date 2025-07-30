// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  bid?: number;
  businessName?: string;
  /**
   * @example
   * 0
   */
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
      serviceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyData extends $dara.Model {
  businessCategoryBasicInfo?: GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryBasicInfo)) {
      $dara.Model.validateArray(this.businessCategoryBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetBusinessCategoryListResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * A186A419-FDBE-464C-AED4-7121CAC73BF1
   */
  requestId?: string;
  /**
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
      data: GetBusinessCategoryListResponseBodyData,
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

