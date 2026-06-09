// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventHouseRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM "test-es"."default"."product_info"
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

