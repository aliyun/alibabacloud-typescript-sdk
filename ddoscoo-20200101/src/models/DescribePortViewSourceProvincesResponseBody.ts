// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortViewSourceProvincesResponseBodySourceProvinces extends $dara.Model {
  /**
   * @remarks
   * The total number of requests that are sent from the ISP.
   * 
   * > This parameter does not indicate the accurate number of requests. You can use this parameter to calculate the proportion of requests from different administrative regions in China.
   * 
   * @example
   * 3390671
   */
  count?: number;
  /**
   * @remarks
   * The ID of the administrative region in China from which the requests are sent. For example, **110000** indicates Beijing, and **120000** indicates Tianjin.
   * 
   * > For more information, see [Location parameters](https://help.aliyun.com/document_detail/167926.html).
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

export class DescribePortViewSourceProvincesResponseBody extends $dara.Model {
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
   * The details of the administrative region in China from which the requests are sent.
   */
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

