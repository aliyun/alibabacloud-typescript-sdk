// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewSourceProvincesResponseBodySourceProvinces extends $dara.Model {
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 3390671
   */
  count?: number;
  /**
   * @remarks
   * The ID of the region inside China. For more information, see the **Codes of administrative regions in China** section of the [Codes of administrative regions in China and codes of countries and areas](https://help.aliyun.com/document_detail/167926.html) topic. For example, **110000** indicates Beijing, and **120000** indicates Tianjin.
   * 
   * @example
   * 440000
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the details of the administrative region in China from which the requests are sent.
   */
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

