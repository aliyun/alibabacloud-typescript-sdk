// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDlpOutboundLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1754956800
   */
  endTime?: number;
  /**
   * @remarks
   * The log ID.
   * 
   * @example
   * da817m4mfrcs6xxxx3hg
   */
  logId?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The policy action. Single-value exact match.
   * 
   * @example
   * block_and_hint
   */
  policyAction?: string;
  /**
   * @remarks
   * The original file name. Fuzzy match.
   * 
   * @example
   * TestFile
   */
  srcFileName?: string;
  /**
   * @remarks
   * The start time of the query. UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1754870400
   */
  startTime?: number;
  /**
   * @remarks
   * The secondary channel ID in the format of `PrimaryChannelID.SubChannelID`. Separate multiple values with commas.
   * 
   * @example
   * 3.1,3.2
   */
  subChannelType?: string;
  /**
   * @remarks
   * The username. Exact match.
   * 
   * @example
   * zhangsan
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      logId: 'LogId',
      pageSize: 'PageSize',
      policyAction: 'PolicyAction',
      srcFileName: 'SrcFileName',
      startTime: 'StartTime',
      subChannelType: 'SubChannelType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      logId: 'string',
      pageSize: 'number',
      policyAction: 'string',
      srcFileName: 'string',
      startTime: 'number',
      subChannelType: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

