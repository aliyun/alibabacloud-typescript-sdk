// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewSourceProvincesResponseBodySourceProvinces extends $dara.Model {
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

export class DescribeDomainViewSourceProvincesResponseBody extends $dara.Model {
  requestId?: string;
  sourceProvinces?: DescribeDomainViewSourceProvincesResponseBodySourceProvinces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceProvinces: 'SourceProvinces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceProvinces: { 'type': 'array', 'itemType': DescribeDomainViewSourceProvincesResponseBodySourceProvinces },
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

