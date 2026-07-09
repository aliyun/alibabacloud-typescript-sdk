// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteQueryRequest extends $dara.Model {
  from?: number;
  length?: number;
  maxOutputLength?: number;
  offset?: number;
  /**
   * @remarks
   * The query entered by the user.
   * 
   * This parameter is required.
   * 
   * @example
   * select count(*) from product_faq_dataset
   */
  query?: string;
  to?: number;
  /**
   * @remarks
   * The statement type. Currently, only SQL is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * SQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      length: 'length',
      maxOutputLength: 'maxOutputLength',
      offset: 'offset',
      query: 'query',
      to: 'to',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      length: 'number',
      maxOutputLength: 'number',
      offset: 'number',
      query: 'string',
      to: 'number',
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

