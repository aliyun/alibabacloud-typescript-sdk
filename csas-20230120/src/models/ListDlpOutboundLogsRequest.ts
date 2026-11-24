// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDlpOutboundLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
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
   * The policy action. Exact match for a single value is supported.
   * 
   * @example
   * block_and_hint
   */
  policyAction?: string;
  /**
   * @remarks
   * The original file name. Fuzzy match is supported.
   * 
   * @example
   * TestFile
   */
  srcFileName?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1754870400
   */
  startTime?: number;
  /**
   * @remarks
   * The secondary channel ID. Format: primary channel ID.secondary channel ID. Multiple values are separated by commas.
   * 
   * @example
   * 3.1,3.2
   */
  subChannelType?: string;
  /**
   * @remarks
   * The username. Exact match is supported.
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

