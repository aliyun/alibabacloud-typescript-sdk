// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchResponseBodyDataSolutionListJourneyList } from "./SearchResponseBodyDataSolutionListJourneyList";
import { SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList } from "./SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList";
import { SearchResponseBodyDataSolutionListSegmentBaggageMappingList } from "./SearchResponseBodyDataSolutionListSegmentBaggageMappingList";
import { SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList } from "./SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList";
import { SearchResponseBodyDataSolutionListSolutionAttribute } from "./SearchResponseBodyDataSolutionListSolutionAttribute";


export class SearchResponseBodyDataSolutionList extends $dara.Model {
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 600
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 11
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 500
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 10
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 400
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 9
   */
  infantTax?: number;
  /**
   * @remarks
   * segment list
   */
  journeyList?: SearchResponseBodyDataSolutionListJourneyList[];
  /**
   * @remarks
   * product type description
   * 
   * @example
   * ""
   */
  productTypeDescription?: string;
  /**
   * @remarks
   * refund airline coupon description
   * 
   * @example
   * ""
   */
  refundTicketCouponDescription?: string;
  /**
   * @remarks
   * through check-in baggage policy
   */
  segmentBaggageCheckInInfoList?: SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule
   */
  segmentBaggageMappingList?: SearchResponseBodyDataSolutionListSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  solutionAttribute?: SearchResponseBodyDataSolutionListSolutionAttribute;
  /**
   * @remarks
   * solution ID
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      journeyList: 'journey_list',
      productTypeDescription: 'product_type_description',
      refundTicketCouponDescription: 'refund_ticket_coupon_description',
      segmentBaggageCheckInInfoList: 'segment_baggage_check_in_info_list',
      segmentBaggageMappingList: 'segment_baggage_mapping_list',
      segmentRefundChangeRuleMappingList: 'segment_refund_change_rule_mapping_list',
      solutionAttribute: 'solution_attribute',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      journeyList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList },
      solutionAttribute: SearchResponseBodyDataSolutionListSolutionAttribute,
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.journeyList)) {
      $dara.Model.validateArray(this.journeyList);
    }
    if(Array.isArray(this.segmentBaggageCheckInInfoList)) {
      $dara.Model.validateArray(this.segmentBaggageCheckInInfoList);
    }
    if(Array.isArray(this.segmentBaggageMappingList)) {
      $dara.Model.validateArray(this.segmentBaggageMappingList);
    }
    if(Array.isArray(this.segmentRefundChangeRuleMappingList)) {
      $dara.Model.validateArray(this.segmentRefundChangeRuleMappingList);
    }
    if(this.solutionAttribute && typeof (this.solutionAttribute as any).validate === 'function') {
      (this.solutionAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

