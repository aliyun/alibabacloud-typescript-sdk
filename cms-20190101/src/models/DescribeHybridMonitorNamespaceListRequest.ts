// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorNamespaceListRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the search.
   * 
   * @example
   * aliyun
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * The name can contain uppercase letters, lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * aliyun-test
   */
  namespace?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to display the configuration details of data import tasks for Alibaba Cloud services and the number of data import tasks for non-Alibaba Cloud services. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  showTaskStatistic?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      showTaskStatistic: 'ShowTaskStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      showTaskStatistic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

