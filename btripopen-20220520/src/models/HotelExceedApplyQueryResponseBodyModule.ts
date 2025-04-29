// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo } from "./HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo";


export class HotelExceedApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 27238197
   */
  applyId?: number;
  applyIntentionInfoDo?: HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  btripCause?: string;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  exceedReason?: string;
  /**
   * @example
   * 16
   */
  exceedType?: number;
  /**
   * @example
   * 10000
   */
  originStandard?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2022-02-11T16:25Z
   */
  submitTime?: string;
  /**
   * @example
   * 0001A1100000007EX08O
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * test_corp
   */
  thirdpartCorpId?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyIntentionInfoDo: 'apply_intention_info_do',
      btripCause: 'btrip_cause',
      corpId: 'corp_id',
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      originStandard: 'origin_standard',
      status: 'status',
      submitTime: 'submit_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyIntentionInfoDo: HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo,
      btripCause: 'string',
      corpId: 'string',
      exceedReason: 'string',
      exceedType: 'number',
      originStandard: 'string',
      status: 'number',
      submitTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.applyIntentionInfoDo && typeof (this.applyIntentionInfoDo as any).validate === 'function') {
      (this.applyIntentionInfoDo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

