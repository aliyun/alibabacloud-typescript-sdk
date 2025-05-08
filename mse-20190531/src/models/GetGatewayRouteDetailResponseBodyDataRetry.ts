// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayRouteDetailResponseBodyDataRetry extends $dara.Model {
  /**
   * @remarks
   * The number of retries allowed.
   * 
   * @example
   * 1
   */
  attempts?: number;
  /**
   * @remarks
   * The HTTP status codes.
   */
  httpCodes?: string[];
  /**
   * @remarks
   * The retry condition.
   */
  retryOn?: string[];
  /**
   * @remarks
   * The retry status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      httpCodes: 'HttpCodes',
      retryOn: 'RetryOn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      httpCodes: { 'type': 'array', 'itemType': 'string' },
      retryOn: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.httpCodes)) {
      $dara.Model.validateArray(this.httpCodes);
    }
    if(Array.isArray(this.retryOn)) {
      $dara.Model.validateArray(this.retryOn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

