// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogConfigsResponseBodyDataLogConfigs } from "./ListLogConfigsResponseBodyDataLogConfigs";


export class ListLogConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The details of the logging configuration.
   */
  logConfigs?: ListLogConfigsResponseBodyDataLogConfigs[];
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      logConfigs: 'LogConfigs',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      logConfigs: { 'type': 'array', 'itemType': ListLogConfigsResponseBodyDataLogConfigs },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logConfigs)) {
      $dara.Model.validateArray(this.logConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

