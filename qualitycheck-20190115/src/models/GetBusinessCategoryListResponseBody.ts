// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo extends $dara.Model {
  bid?: number;
  businessName?: string;
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
   * @remarks
   * Result code. The value **200** indicates success. Any other value indicates failure, and the caller can determine the cause of failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: GetBusinessCategoryListResponseBodyData;
  /**
   * @remarks
   * When an error occurs, this field provides error details; when successful, the value is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A186A419-FDBE-464C-AED4-7121CAC73BF1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. The caller can use this field to determine the request outcome:
   * 
   * - **true** indicates success
   * - **false/null** indicates failure
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

