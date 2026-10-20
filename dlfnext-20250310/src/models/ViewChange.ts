// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewChange extends $dara.Model {
  /**
   * @remarks
   * The type of the view change operation.
   * 
   * @example
   * updateComment
   */
  action?: string;
  /**
   * @remarks
   * The view comment. Required when you perform the updateComment operation.
   * 
   * @example
   * View update description
   */
  comment?: string;
  /**
   * @remarks
   * The dialect used in the view query statement. Required when you perform the addDialect, updateDialect, or dropDialect operation.
   * 
   * @example
   * flink
   */
  dialect?: string;
  /**
   * @remarks
   * The key of the view property. Required when you perform the setOption or removeOption operation.
   * 
   * @example
   * view_option
   */
  key?: string;
  /**
   * @remarks
   * The view query statement. Required when you perform the addDialect or updateDialect operation.
   * 
   * @example
   * SELECT region, SUM(amount) AS total_amount FROM sales GROUP BY region
   */
  query?: string;
  /**
   * @remarks
   * The value of the view property. Required when you perform the setOption operation.
   * 
   * @example
   * enabled
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      comment: 'comment',
      dialect: 'dialect',
      key: 'key',
      query: 'query',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      dialect: 'string',
      key: 'string',
      query: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

