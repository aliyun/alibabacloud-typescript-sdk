// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnrichShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Number of adult passengers 1-9
   * 
   * @example
   * 1
   */
  adults?: number;
  /**
   * @remarks
   * Cabin class ALL_CABIN: all cabin classes; Y: economy; FC: first class and business class; S: premium economy; YS: economy and premium economy; YSC: economy, premium economy, and business class;
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * Number of child passengers 0-9
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * Number of infant passengers 0-9
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * Journey information
   */
  journeyParamListShrink?: string;
  /**
   * @remarks
   * solution_id returned by Search
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      journeyParamListShrink: 'journey_param_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      journeyParamListShrink: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

