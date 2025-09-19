// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * Condition parameters for task scheduling.
   * 
   * @example
   * {"status":1}
   */
  condition?: string;
  /**
   * @remarks
   * The current page number during paginated queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to display per page during paginated queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Strategy task ID.
   * > You can obtain this parameter by calling the [DescribeSoarStrategyTasks](~~DescribeSoarStrategyTasks~~) interface.
   * 
   * @example
   * 100
   */
  strategyTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      strategyTaskId: 'StrategyTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      currentPage: 'number',
      pageSize: 'number',
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

