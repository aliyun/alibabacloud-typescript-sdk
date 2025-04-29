// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo } from "./FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo";
import { FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList } from "./FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList";
import { FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights } from "./FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights";


export class FlightExceedApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1231
   */
  applyId?: number;
  applyIntentionInfoDo?: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  applyIntentionInfoDoList?: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList[];
  applyRecommendFlights?: FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights;
  btripCause?: string;
  /**
   * @example
   * 123
   */
  corpId?: string;
  exceedReason?: string;
  /**
   * @example
   * 1
   */
  exceedType?: number;
  originStandard?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2022-01-12T16:47Z
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
      applyIntentionInfoDoList: 'apply_intention_info_do_list',
      applyRecommendFlights: 'apply_recommend_flights',
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
      applyIntentionInfoDo: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo,
      applyIntentionInfoDoList: { 'type': 'array', 'itemType': FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList },
      applyRecommendFlights: FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights,
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
    if(Array.isArray(this.applyIntentionInfoDoList)) {
      $dara.Model.validateArray(this.applyIntentionInfoDoList);
    }
    if(this.applyRecommendFlights && typeof (this.applyRecommendFlights as any).validate === 'function') {
      (this.applyRecommendFlights as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

