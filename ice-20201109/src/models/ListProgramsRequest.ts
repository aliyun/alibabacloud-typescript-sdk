// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProgramsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The name of the program.
   * 
   * @example
   * program1
   */
  programName?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order. Valid values:
   * 
   * *   asc: ascending order.
   * *   desc: descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      programName: 'ProgramName',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      pageNo: 'string',
      pageSize: 'string',
      programName: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

