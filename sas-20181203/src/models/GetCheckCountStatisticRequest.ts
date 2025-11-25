// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckCountStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the statistics. Valid values:
   * 
   * *   **user**: the top five users that are granted excessive permissions.
   * *   **role**: the top five roles that are granted excessive permissions.
   * *   **instance**: the top five cloud services on which risks are detected.
   * *   **host**: the top five servers on which baseline risks are detected.
   * 
   * @example
   * instance
   */
  statisticType?: string;
  /**
   * @remarks
   * Task source.
   */
  taskSources?: string[];
  /**
   * @remarks
   * The cloud service providers.
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      statisticType: 'StatisticType',
      taskSources: 'TaskSources',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticType: 'string',
      taskSources: { 'type': 'array', 'itemType': 'string' },
      vendors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskSources)) {
      $dara.Model.validateArray(this.taskSources);
    }
    if(Array.isArray(this.vendors)) {
      $dara.Model.validateArray(this.vendors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

