// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryMatchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the matched category.
   * 
   * @example
   * 1522
   */
  categoryId?: string;
  /**
   * @remarks
   * The name of the matched category.
   * 
   * @example
   * 位置和活动跟踪器
   */
  categoryName?: string;
  /**
   * @remarks
   * The full path of the category, separated by forward slashes (/).
   * 
   * @example
   * 宠物用品/猫用品/猫挂饰、项圈、牵引带/位置和活动跟踪器
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
   * The reason for the match.
   * 
   * @example
   * 商品核心为带 AirTag 定位功能的猫项圈，属\\"位置和活动跟踪器\\"类目，叶子节点语义精准匹配其追踪功能与猫用属性。
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
   * The status code. The value "success" is returned for a successful call.
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
   * The error message. The value "Success" is returned for a successful call.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * 2157065A-D6C8-1F3E-A4D0-B1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: true and false.
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

