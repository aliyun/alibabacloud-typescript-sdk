// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySyncStatusByAliUidResponseBodyData extends $dara.Model {
  /**
   * @example
   * 131239236086****
   */
  aliUid?: number;
  /**
   * @example
   * cdrs948144195608****
   */
  corpId?: string;
  /**
   * @example
   * 2020-06-30 07:50:42
   */
  gmtCreated?: string;
  /**
   * @example
   * 2022-03-02 14:27:39
   */
  gmtModified?: string;
  /**
   * @example
   * 18500
   */
  id?: number;
  /**
   * @example
   * 2022-03-02 14:31:39
   */
  latestBeginTime?: string;
  /**
   * @example
   * 2022-03-02 16:13:12
   */
  latestEndTime?: string;
  /**
   * @example
   * 2022-03-02 18:24:01
   */
  latestSuccessTime?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      corpId: 'CorpId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      latestBeginTime: 'LatestBeginTime',
      latestEndTime: 'LatestEndTime',
      latestSuccessTime: 'LatestSuccessTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      corpId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      latestBeginTime: 'string',
      latestEndTime: 'string',
      latestSuccessTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

