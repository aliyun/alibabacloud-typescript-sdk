// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123
   */
  applyId?: number;
  /**
   * @example
   * 5
   */
  bizCategory?: number;
  cause?: string;
  /**
   * @example
   * 0001A1100000007EX08O
   */
  corpId?: string;
  extendValue?: string;
  /**
   * @example
   * 2021-03-18T20:26Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1233
   */
  thirdpartCorpId?: string;
  /**
   * @example
   * 12344
   */
  thirdpartId?: string;
  tripCause?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      cause: 'cause',
      corpId: 'corp_id',
      extendValue: 'extend_value',
      gmtCreate: 'gmt_create',
      status: 'status',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartId: 'thirdpart_id',
      tripCause: 'trip_cause',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      cause: 'string',
      corpId: 'string',
      extendValue: 'string',
      gmtCreate: 'string',
      status: 'number',
      thirdpartCorpId: 'string',
      thirdpartId: 'string',
      tripCause: 'string',
      userId: 'string',
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

