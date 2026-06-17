// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The tags. Tags are used to filter alerts, and each alert can be marked with special tags.
   * 
   * Currently, only filtering by product is supported. That is, the `name` is `product`. For example: {"name":"product","value":"ECS"}.
   * >We do not recommend that you use the special tags for the CloudMonitor console in Alibaba Cloud.
   * 
   * @example
   * [{"name":"product","value":"ECS"}]
   */
  labels?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 10000.
   * 
   * Default value: 30.
   * 
   * >Currently, Alibaba Cloud does not impose a limit on this parameter. If you need to obtain all results, set the page size to a large value.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

