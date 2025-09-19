// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassListBaselineNameListBaselineItemList extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline check item.
   * 
   * @example
   * Ensure that no accounts use the same Hash password.
   */
  alias?: string;
  /**
   * @remarks
   * The key of the type for the baseline.
   * 
   * @example
   * identification
   */
  classKey?: string;
  /**
   * @remarks
   * The key of the name for the baseline check item.
   * 
   * @example
   * duplicate_pwd_hash
   */
  itemKey?: string;
  /**
   * @remarks
   * The key of the name for the baseline.
   * 
   * @example
   * identification
   */
  nameKey?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      classKey: 'ClassKey',
      itemKey: 'ItemKey',
      nameKey: 'NameKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      classKey: 'string',
      itemKey: 'string',
      nameKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassListBaselineNameList extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline.
   * 
   * @example
   * Identity authentication
   */
  alias?: string;
  /**
   * @remarks
   * The information about the baseline check item.
   */
  baselineItemList?: DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassListBaselineNameListBaselineItemList[];
  /**
   * @remarks
   * The key of the type for the baseline.
   * 
   * @example
   * identification
   */
  classKey?: string;
  /**
   * @remarks
   * The key of the name for the baseline.
   * 
   * @example
   * identification
   */
  nameKey?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      baselineItemList: 'BaselineItemList',
      classKey: 'ClassKey',
      nameKey: 'NameKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      baselineItemList: { 'type': 'array', 'itemType': DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassListBaselineNameListBaselineItemList },
      classKey: 'string',
      nameKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItemList)) {
      $dara.Model.validateArray(this.baselineItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassList extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline type.
   * 
   * @example
   * Identity authentication
   */
  alias?: string;
  /**
   * @remarks
   * The information about the baseline.
   */
  baselineNameList?: DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassListBaselineNameList[];
  /**
   * @remarks
   * The key of the baseline type.
   * 
   * @example
   * identification
   */
  classKey?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      baselineNameList: 'BaselineNameList',
      classKey: 'ClassKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      baselineNameList: { 'type': 'array', 'itemType': DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassListBaselineNameList },
      classKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineNameList)) {
      $dara.Model.validateArray(this.baselineNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllImageBaselineResponseBodyImageBaselines extends $dara.Model {
  /**
   * @remarks
   * An array that consists of baseline types.
   */
  baselineClassList?: DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassList[];
  static names(): { [key: string]: string } {
    return {
      baselineClassList: 'BaselineClassList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassList: { 'type': 'array', 'itemType': DescribeAllImageBaselineResponseBodyImageBaselinesBaselineClassList },
    };
  }

  validate() {
    if(Array.isArray(this.baselineClassList)) {
      $dara.Model.validateArray(this.baselineClassList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllImageBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The baselines that are used in image baseline checks.
   */
  imageBaselines?: DescribeAllImageBaselineResponseBodyImageBaselines;
  /**
   * @remarks
   * The ID of the request, which is used to query logs and troubleshoot issues.
   * 
   * @example
   * 1A975D03-5F49-5354-B2CB-3918D5DA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageBaselines: 'ImageBaselines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageBaselines: DescribeAllImageBaselineResponseBodyImageBaselines,
      requestId: 'string',
    };
  }

  validate() {
    if(this.imageBaselines && typeof (this.imageBaselines as any).validate === 'function') {
      (this.imageBaselines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

