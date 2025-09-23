// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatusCodeListResponseBodyStatusCodeList extends $dara.Model {
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * 320
   */
  status200?: number;
  /**
   * @example
   * 5776
   */
  status2XX?: number;
  /**
   * @example
   * 0
   */
  status3XX?: number;
  /**
   * @example
   * 0
   */
  status403?: number;
  /**
   * @example
   * 34
   */
  status404?: number;
  /**
   * @example
   * 11
   */
  status405?: number;
  status410?: number;
  status499?: number;
  /**
   * @example
   * 168
   */
  status4XX?: number;
  /**
   * @example
   * 0
   */
  status501?: number;
  /**
   * @example
   * 3
   */
  status502?: number;
  /**
   * @example
   * 0
   */
  status503?: number;
  /**
   * @example
   * 0
   */
  status504?: number;
  /**
   * @example
   * 7
   */
  status5XX?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      status200: 'Status200',
      status2XX: 'Status2XX',
      status3XX: 'Status3XX',
      status403: 'Status403',
      status404: 'Status404',
      status405: 'Status405',
      status410: 'Status410',
      status499: 'Status499',
      status4XX: 'Status4XX',
      status501: 'Status501',
      status502: 'Status502',
      status503: 'Status503',
      status504: 'Status504',
      status5XX: 'Status5XX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      status200: 'number',
      status2XX: 'number',
      status3XX: 'number',
      status403: 'number',
      status404: 'number',
      status405: 'number',
      status410: 'number',
      status499: 'number',
      status4XX: 'number',
      status501: 'number',
      status502: 'number',
      status503: 'number',
      status504: 'number',
      status5XX: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponseBody extends $dara.Model {
  /**
   * @example
   * 3B63C0DD-8AC5-44B2-95D6-064CA9296B9C
   */
  requestId?: string;
  statusCodeList?: DescribeDomainStatusCodeListResponseBodyStatusCodeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCodeList: 'StatusCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCodeList: { 'type': 'array', 'itemType': DescribeDomainStatusCodeListResponseBodyStatusCodeList },
    };
  }

  validate() {
    if(Array.isArray(this.statusCodeList)) {
      $dara.Model.validateArray(this.statusCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

