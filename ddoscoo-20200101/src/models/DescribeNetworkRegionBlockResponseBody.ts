// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRegionBlockResponseBodyConfig extends $dara.Model {
  countries?: number[];
  provinces?: number[];
  regionBlockSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      countries: 'Countries',
      provinces: 'Provinces',
      regionBlockSwitch: 'RegionBlockSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countries: { 'type': 'array', 'itemType': 'number' },
      provinces: { 'type': 'array', 'itemType': 'number' },
      regionBlockSwitch: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.countries)) {
      $dara.Model.validateArray(this.countries);
    }
    if(Array.isArray(this.provinces)) {
      $dara.Model.validateArray(this.provinces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponseBody extends $dara.Model {
  config?: DescribeNetworkRegionBlockResponseBodyConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeNetworkRegionBlockResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

