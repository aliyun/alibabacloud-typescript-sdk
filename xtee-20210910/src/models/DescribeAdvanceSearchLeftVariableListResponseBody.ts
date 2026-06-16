// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvanceSearchLeftVariableListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * age
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 年龄描述
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * NATIVE
   */
  displayType?: string;
  /**
   * @remarks
   * The return value type of the variable.
   * 
   * @example
   * STRING
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field table sorting.
   * 
   * @example
   * 1
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 2453
   */
  id?: number;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The parent node.
   * 
   * @example
   * name
   */
  parentName?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      displayType: 'displayType',
      fieldRank: 'fieldRank',
      fieldType: 'fieldType',
      id: 'id',
      name: 'name',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      displayType: 'string',
      fieldRank: 'number',
      fieldType: 'string',
      id: 'number',
      name: 'string',
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvanceSearchLeftVariableListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeAdvanceSearchLeftVariableListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeAdvanceSearchLeftVariableListResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

