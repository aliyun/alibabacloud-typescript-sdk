// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PricingResponseBodyDataSolutionJourneyList } from "./PricingResponseBodyDataSolutionJourneyList";
import { PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList } from "./PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList";
import { PricingResponseBodyDataSolutionSegmentBaggageMappingList } from "./PricingResponseBodyDataSolutionSegmentBaggageMappingList";
import { PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList } from "./PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList";


export class PricingResponseBodyDataSolution extends $dara.Model {
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 300
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 30
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 200
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 10
   */
  infantTax?: number;
  /**
   * @remarks
   * journey list
   */
  journeyList?: PricingResponseBodyDataSolutionJourneyList[];
  /**
   * @remarks
   * product type description
   * 
   * @example
   * description
   */
  productTypeDescription?: string;
  /**
   * @remarks
   * refund coupon description
   * 
   * @example
   * description
   */
  refundTicketCouponDescription?: string;
  /**
   * @remarks
   * through check-in baggage policy
   */
  segmentBaggageCheckInInfoList?: PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule list
   */
  segmentBaggageMappingList?: PricingResponseBodyDataSolutionSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * solution_id, equals to solution_id in request
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
      journeyList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

