// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * Set the action for this execution, default is **exec**. Values:
   * - **exec**: Execute. - **terminate**: Terminate.
   * 
   * @example
   * terminate
   */
  execAction?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * >  You can call the [DescribeStrategy](~~DescribeStrategy~~) operation to query the IDs of baseline check policies.
   * 
   * @example
   * 215421
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      execAction: 'ExecAction',
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execAction: 'string',
      lang: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

