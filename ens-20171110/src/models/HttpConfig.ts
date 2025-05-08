// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpConfig extends $dara.Model {
  cookie?: string;
  /**
   * @example
   * 500
   */
  cookieTimeout?: number;
  idleTimeout?: number;
  requestTimeout?: number;
  scheduler?: string;
  serverCertificateId?: string;
  /**
   * **if can be null:**
   * false
   */
  stickySession?: string;
  /**
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @example
   * on
   */
  XForwardedFor?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      XForwardedFor: 'XForwardedFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      idleTimeout: 'number',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      XForwardedFor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

