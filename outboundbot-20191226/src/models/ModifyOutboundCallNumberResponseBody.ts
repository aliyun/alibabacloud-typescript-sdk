// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOutboundCallNumberResponseBodyOutboundCallNumber extends $dara.Model {
  /**
   * @remarks
   * Outbound call number
   * 
   * @example
   * 10088xxxx
   */
  number?: string;
  /**
   * @remarks
   * Number ID
   * 
   * @example
   * fa0e21e9-caab-4629-9121-1e341243d599
   */
  outboundCallNumberId?: string;
  /**
   * @remarks
   * Rate limiting period
   * 
   * @example
   * 10
   */
  rateLimitCount?: string;
  /**
   * @remarks
   * Rate limiting count
   * 
   * @example
   * 100
   */
  rateLimitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      outboundCallNumberId: 'OutboundCallNumberId',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      outboundCallNumberId: 'string',
      rateLimitCount: 'string',
      rateLimitPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOutboundCallNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Number information
   */
  outboundCallNumber?: ModifyOutboundCallNumberResponseBodyOutboundCallNumber;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      outboundCallNumber: 'OutboundCallNumber',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      outboundCallNumber: ModifyOutboundCallNumberResponseBodyOutboundCallNumber,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.outboundCallNumber && typeof (this.outboundCallNumber as any).validate === 'function') {
      (this.outboundCallNumber as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

