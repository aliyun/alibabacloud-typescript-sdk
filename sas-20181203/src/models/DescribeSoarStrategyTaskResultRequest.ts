// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * The condition parameter for task scheduling.
   * 
   * @example
   * {"status":1}
   */
  condition?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the policy task.
   * >Call the [DescribeSoarStrategyTasks](~~DescribeSoarStrategyTasks~~) operation to obtain this parameter.
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

