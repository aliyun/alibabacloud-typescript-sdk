// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the statistics of the check items, including the number of check items supported by the system and the number of check items available to you. Default value: **false**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isItemStatistic?: boolean;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to query the IDs of Alibaba Cloud accounts.
   * 
   * @example
   * 000
   */
  resourceDirectoryAccountId?: string;
  taskSources?: string[];
  /**
   * @remarks
   * The cloud service providers.
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

