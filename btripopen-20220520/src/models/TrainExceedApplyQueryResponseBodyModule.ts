// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO } from "./TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo";


export class TrainExceedApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * apply1
   */
  applyId?: number;
  applyIntentionInfoDO?: TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO;
  btripCause?: string;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  exceedReason?: string;
  /**
   * @example
   * 32
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
   * 2022-02-24T09:55Z
   */
  submitTime?: string;
  /**
   * @example
   * 0001A1100000007EX08O
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * testcorp1
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
      applyIntentionInfoDO: 'apply_intention_info_d_o',
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
      applyIntentionInfoDO: TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO,
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
    if(this.applyIntentionInfoDO && typeof (this.applyIntentionInfoDO as any).validate === 'function') {
      (this.applyIntentionInfoDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

