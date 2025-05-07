// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRoutePoliciesRetry extends $dara.Model {
  attempts?: number;
  /**
   * @example
   * true/false
   */
  enable?: boolean;
  httpCodes?: string[];
  retryOn?: string[];
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      enable: 'Enable',
      httpCodes: 'HttpCodes',
      retryOn: 'RetryOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      enable: 'boolean',
      httpCodes: { 'type': 'array', 'itemType': 'string' },
      retryOn: { 'type': 'array', 'itemType': 'string' },
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

