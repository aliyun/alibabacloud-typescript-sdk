// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAggregateFunctionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The aggregate function.
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The display name of the aggregate function.
   * 
   * @example
   * Count
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      functionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

