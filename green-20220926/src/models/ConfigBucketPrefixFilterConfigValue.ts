// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigBucketPrefixFilterConfigValue extends $dara.Model {
  /**
   * @remarks
   * The prefix filter type.
   * 
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @remarks
   * The prefix list.
   */
  prefixFilters?: string[];
  static names(): { [key: string]: string } {
    return {
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixFilterType: 'string',
      prefixFilters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.prefixFilters)) {
      $dara.Model.validateArray(this.prefixFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

