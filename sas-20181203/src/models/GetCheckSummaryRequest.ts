// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return check item statistics information, including the number of check items published by the system and the number of check items currently owned by the user. Default value: **false**. Valid values:
   * - **true**: Returns the statistics information.
   * - **false**: Does not return the statistics information.
   * 
   * @example
   * false
   */
  isItemStatistic?: boolean;
  /**
   * @remarks
   * The language type for requests and responses.
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource directory.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 000
   */
  resourceDirectoryAccountId?: string;
  /**
   * @remarks
   * The list of task sources.
   */
  taskSources?: string[];
  /**
   * @remarks
   * The list of cloud service providers.
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      isItemStatistic: 'IsItemStatistic',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      taskSources: 'TaskSources',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isItemStatistic: 'boolean',
      lang: 'string',
      resourceDirectoryAccountId: 'string',
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

