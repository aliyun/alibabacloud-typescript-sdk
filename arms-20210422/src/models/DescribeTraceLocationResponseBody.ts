// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceLocationResponseBodyRegionConfigs extends $dara.Model {
  regionNo?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLocationResponseBody extends $dara.Model {
  regionConfigs?: DescribeTraceLocationResponseBodyRegionConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionConfigs: 'RegionConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionConfigs: { 'type': 'array', 'itemType': DescribeTraceLocationResponseBodyRegionConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionConfigs)) {
      $dara.Model.validateArray(this.regionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

