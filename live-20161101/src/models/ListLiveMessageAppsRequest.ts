// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The data center. The value must be the same as the data center specified in [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html). Valid values: cn-shanghai (China (Shanghai)) and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The starting position of the query page. If this parameter is left empty or set to -1, the first page is returned by default.
   * 
   * @example
   * -1
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The sort type by creation time. Valid values:
   * - 1: ascending order.
   * - 2: descending order.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sortType?: number;
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
      nextPageToken: 'NextPageToken',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: 'string',
      nextPageToken: 'number',
      sortType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

