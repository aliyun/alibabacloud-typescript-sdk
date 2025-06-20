// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceCountsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. For more information, see `Supported filter parameters`.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching mode.
   * 
   * The value Equals indicates an equal match.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

