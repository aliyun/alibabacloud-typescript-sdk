// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSoarStrategyTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy task that is in the waiting state.
   * >Call the [DescribeSoarStrategyTasks](https://help.aliyun.com/document_detail/2837958.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 11082
   */
  strategyTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      strategyTaskId: 'StrategyTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

