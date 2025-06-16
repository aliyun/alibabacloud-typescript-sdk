// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRequestSearchControlOptions extends $dara.Model {
  /**
   * @remarks
   * excluded airlines list
   */
  airlineExcludedList?: string[];
  /**
   * @remarks
   * preferred airlines list
   */
  airlinePreferList?: string[];
  /**
   * @example
   * A1
   */
  serviceQuality?: string;
  static names(): { [key: string]: string } {
    return {
      airlineExcludedList: 'airline_excluded_list',
      airlinePreferList: 'airline_prefer_list',
      serviceQuality: 'service_quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineExcludedList: { 'type': 'array', 'itemType': 'string' },
      airlinePreferList: { 'type': 'array', 'itemType': 'string' },
      serviceQuality: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.airlineExcludedList)) {
      $dara.Model.validateArray(this.airlineExcludedList);
    }
    if(Array.isArray(this.airlinePreferList)) {
      $dara.Model.validateArray(this.airlinePreferList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

