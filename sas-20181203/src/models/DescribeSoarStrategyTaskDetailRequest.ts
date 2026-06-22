// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the policy task.
   * >Call the [DescribeSoarStrategyTasks](~~DescribeSoarStrategyTasks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10585
   */
  strategyTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      strategyTaskId: 'StrategyTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      strategyTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

