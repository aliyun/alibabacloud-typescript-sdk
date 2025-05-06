// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportedRegionsResponseBodyRegions extends $dara.Model {
  description?: string;
  extra?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 华北2 (北京)
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extra: 'Extra',
      region: 'Region',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extra: 'string',
      region: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

