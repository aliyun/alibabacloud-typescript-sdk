// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatusCodeCountResponseBody extends $dara.Model {
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
   * The number of 200 status codes within the specified period of time.
   * 
   * @example
   * 951159
   */
  status200?: number;
  /**
   * @remarks
   * The number of 2xx status codes within the specified period of time.
   * 
   * @example
   * 951472
   */
  status2XX?: number;
  /**
   * @remarks
   * The number of 3xx status codes within the specified period of time.
   * 
   * @example
   * 133209
   */
  status3XX?: number;
  /**
   * @remarks
   * The number of 403 status codes within the specified period of time.
   * 
   * @example
   * 0
   */
  status403?: number;
  /**
   * @remarks
   * The number of 404 status codes within the specified period of time.
   * 
   * @example
   * 897
   */
  status404?: number;
  /**
   * @remarks
   * The number of 405 status codes within the specified period of time.
   * 
   * @example
   * 0
   */
  status405?: number;
  status410?: number;
  status499?: number;
  /**
   * @remarks
   * The number of 4xx status codes within the specified period of time.
   * 
   * @example
   * 5653
   */
  status4XX?: number;
  /**
   * @remarks
   * The number of 501 status codes within the specified period of time.
   * 
   * @example
   * 0
   */
  status501?: number;
  /**
   * @remarks
   * The number of 502 status codes within the specified period of time.
   * 
   * @example
   * 0
   */
  status502?: number;
  /**
   * @remarks
   * The number of 503 status codes within the specified period of time.
   * 
   * @example
   * 0
   */
  status503?: number;
  /**
   * @remarks
   * The number of 504 status codes within the specified period of time.
   * 
   * @example
   * 0
   */
  status504?: number;
  /**
   * @remarks
   * The number of 5xx status codes within the specified period of time.
   * 
   * @example
   * 14
   */
  status5XX?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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
      requestId: 'string',
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

