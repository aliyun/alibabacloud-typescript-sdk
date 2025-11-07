// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnrichShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Number of adult passengers (1-9)
   * 
   * @example
   * 1
   */
  adults?: number;
  /**
   * @remarks
   * Cabin class: ALL_CABIN: All cabin classes; Y: Economy; FC: First Class and Business Class; S: Premium Economy; YS: Economy and Premium Economy; YSC: Economy, Premium Economy, and Business Class;
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * Number of child passengers (0-9)
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * Number of infant passengers (0-9)
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * Trip information
   */
  journeyParamListShrink?: string;
  /**
   * @remarks
   * The `solution_id` returned by the Search interface
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

