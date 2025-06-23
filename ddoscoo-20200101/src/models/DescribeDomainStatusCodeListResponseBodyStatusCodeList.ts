// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatusCodeListResponseBodyStatusCodeList extends $dara.Model {
  /**
   * @remarks
   * The index number of the returned data.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The number of 200 status codes.
   * 
   * @example
   * 15520
   */
  status200?: number;
  /**
   * @remarks
   * The number of 2xx status codes.
   * 
   * @example
   * 15520
   */
  status2XX?: number;
  /**
   * @remarks
   * The number of 3xx status codes.
   * 
   * @example
   * 0
   */
  status3XX?: number;
  /**
   * @remarks
   * The number of 403 status codes.
   * 
   * @example
   * 0
   */
  status403?: number;
  /**
   * @remarks
   * The number of 404 status codes.
   * 
   * @example
   * 0
   */
  status404?: number;
  /**
   * @remarks
   * The number of 405 status codes.
   * 
   * @example
   * 0
   */
  status405?: number;
  status410?: number;
  status499?: number;
  /**
   * @remarks
   * The number of 4xx status codes.
   * 
   * @example
   * 4486
   */
  status4XX?: number;
  /**
   * @remarks
   * The number of 501 status codes.
   * 
   * @example
   * 0
   */
  status501?: number;
  /**
   * @remarks
   * The number of 502 status codes.
   * 
   * @example
   * 0
   */
  status502?: number;
  /**
   * @remarks
   * The number of 503 status codes.
   * 
   * @example
   * 0
   */
  status503?: number;
  /**
   * @remarks
   * The number of 504 status codes.
   * 
   * @example
   * 0
   */
  status504?: number;
  /**
   * @remarks
   * The number of 5xx status codes.
   * 
   * @example
   * 0
   */
  status5XX?: number;
  /**
   * @remarks
   * The time when the data was collected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1582992000
   */
  time?: number;
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
      time: 'Time',
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
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

