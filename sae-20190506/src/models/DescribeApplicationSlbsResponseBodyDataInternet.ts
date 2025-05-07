// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationSlbsResponseBodyDataInternet extends $dara.Model {
  /**
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The timestamp when the canary release rule was created.
   * 
   * @example
   * 1741247308294
   */
  createTime?: number;
  /**
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCaCertId?: string;
  /**
   * @remarks
   * The supported protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCertId?: string;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * false
   */
  stickySession?: boolean;
  /**
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The port specified for the SLB listener.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      createTime: 'CreateTime',
      httpsCaCertId: 'HttpsCaCertId',
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      createTime: 'number',
      httpsCaCertId: 'string',
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      stickySession: 'boolean',
      stickySessionType: 'string',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

