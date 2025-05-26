// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleQueryResponseBodyAggregationsGroups extends $dara.Model {
  /**
   * @remarks
   * The number of results in the grouped aggregation.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The value for the grouped aggregation.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

