// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationCategoryResponseBodyTypeListCategoryList extends $dara.Model {
  /**
   * @remarks
   * The description of the outbound connection category.
   * 
   * @example
   * AliYun
   */
  categoryDescribe?: string;
  /**
   * @remarks
   * The ID of the outbound connection category.
   * 
   * @example
   * 123
   */
  categoryId?: string;
  /**
   * @remarks
   * The name of the outbound connection category.
   * 
   * @example
   * AliYun
   */
  categoryName?: string;
  /**
   * @remarks
   * The classification ID of the outbound connection category.
   * 
   * @example
   * Trusted
   */
  classId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryDescribe: 'CategoryDescribe',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      classId: 'ClassId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryDescribe: 'string',
      categoryId: 'string',
      categoryName: 'string',
      classId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationCategoryResponseBodyTypeList extends $dara.Model {
  /**
   * @remarks
   * The list of outbound connection categories.
   */
  categoryList?: DescribeOutgoingDestinationCategoryResponseBodyTypeListCategoryList[];
  /**
   * @remarks
   * The description of the fixed category.
   * 
   * @example
   * AliYun
   */
  typeDescribe?: string;
  /**
   * @remarks
   * The fixed category ID.
   * 
   * @example
   * All
   */
  typeId?: string;
  /**
   * @remarks
   * The name of the fixed category.
   * 
   * @example
   * AliYun
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      typeDescribe: 'TypeDescribe',
      typeId: 'TypeId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationCategoryResponseBodyTypeListCategoryList },
      typeDescribe: 'string',
      typeId: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryList)) {
      $dara.Model.validateArray(this.categoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1ED80BC-FFC8-57DB-8151-705DC31****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of outbound connection categories.
   */
  typeList?: DescribeOutgoingDestinationCategoryResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      typeList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationCategoryResponseBodyTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

