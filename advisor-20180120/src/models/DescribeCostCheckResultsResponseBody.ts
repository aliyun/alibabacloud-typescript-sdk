// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostCheckResultsResponseBodyDataViewGroupCheckItems extends $dara.Model {
  /**
   * @example
   * 100
   */
  adviceCount?: number;
  /**
   * @example
   * 1
   */
  adviceResourceCount?: number;
  /**
   * @example
   * 4
   */
  category?: string;
  /**
   * @example
   * EbsCostIdleCheck
   */
  checkId?: string;
  checkName?: string;
  /**
   * @example
   * 1
   */
  currentCost?: number;
  description?: string;
  /**
   * @example
   * 1
   */
  expectedSavingCost?: number;
  /**
   * @example
   * 1
   */
  optimizedCost?: number;
  /**
   * @example
   * slb
   */
  product?: string;
  /**
   * @example
   * 1
   */
  severity?: number;
  /**
   * @example
   * true
   */
  summary?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      adviceCount: 'AdviceCount',
      adviceResourceCount: 'AdviceResourceCount',
      category: 'Category',
      checkId: 'CheckId',
      checkName: 'CheckName',
      currentCost: 'CurrentCost',
      description: 'Description',
      expectedSavingCost: 'ExpectedSavingCost',
      optimizedCost: 'OptimizedCost',
      product: 'Product',
      severity: 'Severity',
      summary: 'Summary',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceCount: 'number',
      adviceResourceCount: 'number',
      category: 'string',
      checkId: 'string',
      checkName: 'string',
      currentCost: 'number',
      description: 'string',
      expectedSavingCost: 'number',
      optimizedCost: 'number',
      product: 'string',
      severity: 'number',
      summary: 'string',
      tips: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsResponseBodyDataViewGroup extends $dara.Model {
  checkItems?: DescribeCostCheckResultsResponseBodyDataViewGroupCheckItems[];
  /**
   * @example
   * 22
   */
  groupCode?: string;
  /**
   * @example
   * 0
   */
  groupCount?: number;
  /**
   * @example
   * 1
   */
  groupExpectedSavingCost?: number;
  /**
   * @example
   * aut***8ainRh1
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'CheckItems',
      groupCode: 'GroupCode',
      groupCount: 'GroupCount',
      groupExpectedSavingCost: 'GroupExpectedSavingCost',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': DescribeCostCheckResultsResponseBodyDataViewGroupCheckItems },
      groupCode: 'string',
      groupCount: 'number',
      groupExpectedSavingCost: 'number',
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkItems)) {
      $dara.Model.validateArray(this.checkItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsResponseBodyData extends $dara.Model {
  adviceResourceCount?: number;
  /**
   * @example
   * Category
   */
  groupBy?: string;
  /**
   * @example
   * 1
   */
  normalCount?: number;
  /**
   * @example
   * 76
   */
  resourceCount?: number;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  viewGroup?: DescribeCostCheckResultsResponseBodyDataViewGroup[];
  /**
   * @example
   * 1
   */
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceResourceCount: 'AdviceResourceCount',
      groupBy: 'GroupBy',
      normalCount: 'NormalCount',
      resourceCount: 'ResourceCount',
      totalCount: 'TotalCount',
      viewGroup: 'ViewGroup',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceResourceCount: 'number',
      groupBy: 'string',
      normalCount: 'number',
      resourceCount: 'number',
      totalCount: 'number',
      viewGroup: { 'type': 'array', 'itemType': DescribeCostCheckResultsResponseBodyDataViewGroup },
      warningCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.viewGroup)) {
      $dara.Model.validateArray(this.viewGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeCostCheckResultsResponseBodyData;
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
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
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
      data: DescribeCostCheckResultsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

