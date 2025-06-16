// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnrichResponseBodyDataSolutionListJourneyList } from "./EnrichResponseBodyDataSolutionListJourneyList";
import { EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList } from "./EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList";
import { EnrichResponseBodyDataSolutionListSegmentBaggageMappingList } from "./EnrichResponseBodyDataSolutionListSegmentBaggageMappingList";
import { EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList } from "./EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList";
import { EnrichResponseBodyDataSolutionListSolutionAttribute } from "./EnrichResponseBodyDataSolutionListSolutionAttribute";


export class EnrichResponseBodyDataSolutionList extends $dara.Model {
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 500
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 100
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 100
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 100
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 500
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 100
   */
  infantTax?: number;
  /**
   * @remarks
   * journey list
   */
  journeyList?: EnrichResponseBodyDataSolutionListJourneyList[];
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
   * through check-in baggage  policy
   */
  segmentBaggageCheckInInfoList?: EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule
   */
  segmentBaggageMappingList?: EnrichResponseBodyDataSolutionListSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  solutionAttribute?: EnrichResponseBodyDataSolutionListSolutionAttribute;
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
      journeyList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList },
      solutionAttribute: EnrichResponseBodyDataSolutionListSolutionAttribute,
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

