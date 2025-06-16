// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PricingResponseBodyDataChangedPriceInfo } from "./PricingResponseBodyDataChangedPriceInfo";
import { PricingResponseBodyDataOriginalPriceInfo } from "./PricingResponseBodyDataOriginalPriceInfo";
import { PricingResponseBodyDataSolution } from "./PricingResponseBodyDataSolution";


export class PricingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * price information after the price change
   */
  changedPriceInfo?: PricingResponseBodyDataChangedPriceInfo;
  /**
   * @remarks
   * whether the price has changed
   * 
   * @example
   * true
   */
  isChanged?: boolean;
  /**
   * @remarks
   * the price information before the change, only available when is_changed = true
   */
  originalPriceInfo?: PricingResponseBodyDataOriginalPriceInfo;
  /**
   * @remarks
   * remaining seats: A indicates more than 9, 0-9 represents the specific number
   * 
   * @example
   * A
   */
  remainSeats?: string;
  /**
   * @remarks
   * the solution represented by the solution_id in request
   */
  solution?: PricingResponseBodyDataSolution;
  static names(): { [key: string]: string } {
    return {
      changedPriceInfo: 'changed_price_info',
      isChanged: 'is_changed',
      originalPriceInfo: 'original_price_info',
      remainSeats: 'remain_seats',
      solution: 'solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changedPriceInfo: PricingResponseBodyDataChangedPriceInfo,
      isChanged: 'boolean',
      originalPriceInfo: PricingResponseBodyDataOriginalPriceInfo,
      remainSeats: 'string',
      solution: PricingResponseBodyDataSolution,
    };
  }

  validate() {
    if(this.changedPriceInfo && typeof (this.changedPriceInfo as any).validate === 'function') {
      (this.changedPriceInfo as any).validate();
    }
    if(this.originalPriceInfo && typeof (this.originalPriceInfo as any).validate === 'function') {
      (this.originalPriceInfo as any).validate();
    }
    if(this.solution && typeof (this.solution as any).validate === 'function') {
      (this.solution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

