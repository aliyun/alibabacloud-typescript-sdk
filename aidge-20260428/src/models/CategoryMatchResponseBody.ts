// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryMatchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The matched category ID.
   * 
   * @example
   * 1522
   */
  categoryId?: string;
  /**
   * @remarks
   * The matched category name.
   * 
   * @example
   * Location and Activity Trackers
   */
  categoryName?: string;
  /**
   * @remarks
   * The full path of the category, separated by forward slashes (/).
   * 
   * @example
   * Pet Supplies/Cat Supplies/Cat Charms, Collars & Leashes/Location and Activity Trackers
   */
  categoryPath?: string;
  /**
   * @remarks
   * The matching confidence score, ranging from 0 to 100.
   * 
   * @example
   * 96
   */
  confidence?: number;
  /**
   * @remarks
   * Indicates whether the match is successful.
   * 
   * @example
   * true
   */
  matchSuccessful?: boolean;
  /**
   * @remarks
   * The matching rationale.
   * 
   * @example
   * The core of the product is a cat collar with AirTag tracking functionality, which belongs to the \\"Location and Activity Trackers\\" category. The leaf node semantics precisely match its tracking function and cat-specific attributes
   */
  reason?: string;
  /**
   * @remarks
   * The usage information.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      categoryPath: 'CategoryPath',
      confidence: 'Confidence',
      matchSuccessful: 'MatchSuccessful',
      reason: 'Reason',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      categoryPath: 'string',
      confidence: 'number',
      matchSuccessful: 'boolean',
      reason: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryMatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. "success" is returned for successful calls.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The product category matching result.
   */
  data?: CategoryMatchResponseBodyData;
  /**
   * @remarks
   * The error message. "Success" is returned for successful calls.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to identify a unique request call.
   * 
   * @example
   * 2157065A-D6C8-1F3E-A4D0-B1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success, and a value of false indicates failure.
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
      data: CategoryMatchResponseBodyData,
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

