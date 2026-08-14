// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortViewSourceProvincesResponseBodySourceProvinces extends $dara.Model {
  count?: number;
  provinceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      provinceId: 'ProvinceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      provinceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesResponseBody extends $dara.Model {
  requestId?: string;
  sourceProvinces?: DescribePortViewSourceProvincesResponseBodySourceProvinces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceProvinces: 'SourceProvinces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceProvinces: { 'type': 'array', 'itemType': DescribePortViewSourceProvincesResponseBodySourceProvinces },
    };
  }

  validate() {
    if(Array.isArray(this.sourceProvinces)) {
      $dara.Model.validateArray(this.sourceProvinces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

