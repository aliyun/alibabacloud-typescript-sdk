// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceCountsRequestFilter extends $dara.Model {
  /**
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @example
   * Equals
   */
  matchType?: string;
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

