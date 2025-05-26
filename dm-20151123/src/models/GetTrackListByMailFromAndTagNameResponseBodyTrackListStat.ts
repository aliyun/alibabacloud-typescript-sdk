// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListByMailFromAndTagNameResponseBodyTrackListStat extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2025-01-11T10:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * Click count
   * 
   * @example
   * 0
   */
  rcptClickCount?: string;
  /**
   * @remarks
   * Click rate
   * 
   * @example
   * 0
   */
  rcptClickRate?: string;
  /**
   * @remarks
   * Number of opens
   * 
   * @example
   * 0
   */
  rcptOpenCount?: string;
  /**
   * @remarks
   * Open rate
   * 
   * @example
   * 0
   */
  rcptOpenRate?: string;
  /**
   * @remarks
   * Unique click count
   * 
   * @example
   * 0
   */
  rcptUniqueClickCount?: string;
  /**
   * @remarks
   * Unique click rate
   * 
   * @example
   * 0
   */
  rcptUniqueClickRate?: string;
  /**
   * @remarks
   * Unique open count
   * 
   * @example
   * 0
   */
  rcptUniqueOpenCount?: string;
  /**
   * @remarks
   * Unique open rate
   * 
   * @example
   * 0
   */
  rcptUniqueOpenRate?: string;
  /**
   * @remarks
   * Total number
   * 
   * @example
   * 0
   */
  totalNumber?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      rcptClickCount: 'RcptClickCount',
      rcptClickRate: 'RcptClickRate',
      rcptOpenCount: 'RcptOpenCount',
      rcptOpenRate: 'RcptOpenRate',
      rcptUniqueClickCount: 'RcptUniqueClickCount',
      rcptUniqueClickRate: 'RcptUniqueClickRate',
      rcptUniqueOpenCount: 'RcptUniqueOpenCount',
      rcptUniqueOpenRate: 'RcptUniqueOpenRate',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      rcptClickCount: 'string',
      rcptClickRate: 'string',
      rcptOpenCount: 'string',
      rcptOpenRate: 'string',
      rcptUniqueClickCount: 'string',
      rcptUniqueClickRate: 'string',
      rcptUniqueOpenCount: 'string',
      rcptUniqueOpenRate: 'string',
      totalNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

