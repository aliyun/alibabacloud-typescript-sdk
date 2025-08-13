// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvanceSearchLeftVariableListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Variable code
   * 
   * @example
   * age
   */
  code?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 年龄描述
   */
  description?: string;
  /**
   * @remarks
   * Display type and grouping label
   * 
   * @example
   * NATIVE
   */
  displayType?: string;
  /**
   * @remarks
   * Variable return value type
   * 
   * @example
   * STRING
   */
  fieldRank?: number;
  /**
   * @remarks
   * Field table sorting
   * 
   * @example
   * 1
   */
  fieldType?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 2453
   */
  id?: number;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Parent node
   * 
   * @example
   * name
   */
  parentName?: string;
  /**
   * @remarks
   * Data source
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Variable type
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
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
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

