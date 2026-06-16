// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryAttributeMatchResponseBodyDataAttributes extends $dara.Model {
  /**
   * @remarks
   * The attribute ID.
   * 
   * @example
   * 682439
   */
  attrId?: number;
  /**
   * @remarks
   * The matching confidence score. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * The input type of the attribute.
   * 
   * @example
   * 单选下拉
   */
  inputType?: string;
  /**
   * @remarks
   * Indicates whether the attribute is successfully matched. Valid values: true and false.
   * 
   * @example
   * True
   */
  matched?: boolean;
  /**
   * @remarks
   * The Chinese name of the attribute.
   * 
   * @example
   * netpila-backup-vpc-j5ekvvg5i5iquaeqbyf6b-cn-shenzhen-finance-1d
   */
  name?: string;
  /**
   * @remarks
   * The English name of the attribute.
   * 
   * @example
   * ABC Private POP
   */
  nameEn?: string;
  /**
   * @remarks
   * The reason for the matching result.
   * 
   * @example
   * a_reason
   */
  reason?: string;
  /**
   * @remarks
   * The list of selected attribute value texts, such as ["iOS","Android"\\].
   */
  selectedValues?: string[];
  /**
   * @remarks
   * The list of selected attribute value IDs, such as [30127,30128\\].
   */
  selectedVids?: number[];
  static names(): { [key: string]: string } {
    return {
      attrId: 'AttrId',
      confidence: 'Confidence',
      inputType: 'InputType',
      matched: 'Matched',
      name: 'Name',
      nameEn: 'NameEn',
      reason: 'Reason',
      selectedValues: 'SelectedValues',
      selectedVids: 'SelectedVids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrId: 'number',
      confidence: 'number',
      inputType: 'string',
      matched: 'boolean',
      name: 'string',
      nameEn: 'string',
      reason: 'string',
      selectedValues: { 'type': 'array', 'itemType': 'string' },
      selectedVids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedValues)) {
      $dara.Model.validateArray(this.selectedValues);
    }
    if(Array.isArray(this.selectedVids)) {
      $dara.Model.validateArray(this.selectedVids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryAttributeMatchResponseBodyDataUsageMap extends $dara.Model {
  /**
   * @remarks
   * The number of processing times.
   * 
   * @example
   * 1
   */
  processingCount?: number;
  static names(): { [key: string]: string } {
    return {
      processingCount: 'ProcessingCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processingCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryAttributeMatchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of attribute filling results.
   */
  attributes?: CategoryAttributeMatchResponseBodyDataAttributes[];
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * FC-F3A8A2802D10606D
   */
  categoryId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * 猫项圈
   */
  categoryName?: string;
  /**
   * @remarks
   * The full path of the category, separated by "/".
   * 
   * @example
   * 宠物用品/猫用品/猫挂饰、项圈、牵引带/猫项圈
   */
  categoryPath?: string;
  /**
   * @remarks
   * The number of attributes that are successfully filled.
   * 
   * @example
   * 7
   */
  filledCount?: number;
  /**
   * @remarks
   * Indicates whether the attribute is successfully matched. Valid values: true and false.
   * 
   * @example
   * True
   */
  matched?: boolean;
  /**
   * @remarks
   * The total number of attributes under the category.
   * 
   * @example
   * 10
   */
  totalAttributes?: number;
  /**
   * @remarks
   * The usage fields.
   */
  usageMap?: CategoryAttributeMatchResponseBodyDataUsageMap;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      categoryPath: 'CategoryPath',
      filledCount: 'FilledCount',
      matched: 'Matched',
      totalAttributes: 'TotalAttributes',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': CategoryAttributeMatchResponseBodyDataAttributes },
      categoryId: 'number',
      categoryName: 'string',
      categoryPath: 'string',
      filledCount: 'number',
      matched: 'boolean',
      totalAttributes: 'number',
      usageMap: CategoryAttributeMatchResponseBodyDataUsageMap,
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    if(this.usageMap && typeof (this.usageMap as any).validate === 'function') {
      (this.usageMap as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryAttributeMatchResponseBody extends $dara.Model {
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
   * The returned result.
   */
  data?: CategoryAttributeMatchResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9927B72F-3C8F-54C0-AAE3-2B1AC94BB6EF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: CategoryAttributeMatchResponseBodyData,
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

