// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required. The field name. For a list of the supported fields, see [Supported fields and operators](https://help.aliyun.com/document_detail/252856.html).
   * 
   * @example
   * Size
   */
  field?: string;
  /**
   * @remarks
   * This parameter is required. The operator.
   * 
   * Enumerated values:
   * 
   * *   exist: exists query.
   * *   not: logical NOT.
   * *   or: logical OR.
   * *   prefix: prefix query.
   * *   and: logical AND.
   * *   It: less than.
   * *   match-phrase: string match query.
   * *   gte: greater than or equal to.
   * *   eq: equal to.
   * *   lte: less than or equal to.
   * *   gt: greater than.
   * *   nested: You can perform logical condition queries within the same object when the data type of a field is ARRAY.
   * 
   * @example
   * and
   */
  operation?: string;
  /**
   * @remarks
   * The subquery structure.
   * 
   * You can configure Subquery conditions only if you set the Operation parameter to and, or, not, or nested.
   * 
   * If you set the Operation parameter to and, or, or not, all query conditions specified by the SubQueries parameter must comply with the logical relationship of the parent query condition.
   * 
   * If you set the Operation parameter to nested, the parent field of a subquery must be of the ARRAY type, such as Labels. The operator of a subquery condition must be one or more of the following operators: and, or, and not. The field of the subquery must be a sub-field of the parent field.
   * 
   * For information about how to call the SimpleQuery operation, see [SimpleQuery](https://help.aliyun.com/document_detail/478175.html).
   */
  subQueries?: SimpleQuery[];
  /**
   * @remarks
   * The field value. If you set the Operation parameter to and, or, not, or nested, this parameter is invalid.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
      subQueries: 'SubQueries',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
      subQueries: { 'type': 'array', 'itemType': SimpleQuery },
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subQueries)) {
      $dara.Model.validateArray(this.subQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

