// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The starting page number for the query. If you leave this parameter empty or set this parameter to -1, the query starts from the first page.
   * 
   * @example
   * -1
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The sort order based on the creation time. Valid values:
   * 
   * *   1: ascending order
   * *   2: descending order
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

